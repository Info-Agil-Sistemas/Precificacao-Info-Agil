// ===== FUNÇÕES DE PDF E RELATÓRIOS =====

function calcularMargemMedia() {
    if (!dadosCalculados?.resultados?.planos) return 0;
    
    try {
        let margemPonderada = 0;
        let totalDistribuicao = 0;
        
        Object.entries(dadosCalculados.resultados.planos).forEach(([plano, planoData]) => {
            const distribuicao = dadosCalculados.inputs.parametros.distribuicao[plano] || 0;
            const margem = planoData.margem || 0;
            const preco = planoData.preco || 0;
            const custoDireto = planoData.custoDireto || 0;
            
            // Calcular margem percentual se não estiver definida
            const margemPercentual = preco > 0 ? ((preco - custoDireto) / preco) * 100 : 0;
            
            margemPonderada += margemPercentual * distribuicao;
            totalDistribuicao += distribuicao;
        });
        
        return totalDistribuicao > 0 ? margemPonderada / totalDistribuicao : 0;
    } catch (error) {
        console.error('Erro ao calcular margem média:', error);
        return 0;
    }
}

function gerarRelatorioCompleto() {
    if (!dadosCalculados || !dadosCalculados.resultados) {
        alert('Execute primeiro o cálculo de precificação!');
        return;
    }

    const agora = new Date();
    const dataHora = agora.toLocaleString('pt-BR');
    const dados = dadosCalculados;
    const fileName = `Relatorio_Precificacao_InfoAgil_${agora.getFullYear()}-${(agora.getMonth()+1).toString().padStart(2,'0')}-${agora.getDate().toString().padStart(2,'0')}.pdf`;

    // Calcular métricas derivadas
    const custosFixosTotal = Object.values(dados.inputs.custoFixo).reduce((a,b)=>a+b,0);
    const receitaAnual = dados.resultados.mrrTotal * 12;
    const margemMedia = calcularMargemMedia();
    const receitaAdicionais = getValue('receitaAdicionaisMensal') || 0;
    const ticketMedio = getValue('ticketMedioComAdicionais') || 0;
    
    // Criar elemento temporário para o conteúdo do relatório
    const reportContent = document.createElement('div');
    reportContent.style.cssText = `
        font-family: Arial, sans-serif;
        color: #333;
        line-height: 1.6;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        background: white;
    `;

    reportContent.innerHTML = gerarConteudoRelatorio(dados, dataHora, custosFixosTotal, receitaAnual, margemMedia, receitaAdicionais, ticketMedio);

    // Adicionar o conteúdo temporariamente ao body
    document.body.appendChild(reportContent);

    // Configuração do html2canvas e jsPDF
    const options = {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
    };

    // Gerar PDF
    html2canvas(reportContent, options).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 295; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        // Adicionar primeira página
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Adicionar páginas adicionais se necessário
        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        // Remover elemento temporário
        document.body.removeChild(reportContent);

        // Fazer download do PDF
        try {
            pdf.save(fileName);
            alert('✅ Relatório PDF gerado com sucesso!\\nArquivo: ' + fileName);
        } catch (error) {
            console.error('Erro ao gerar PDF:', error);
            alert('❌ Erro ao gerar PDF. Tente novamente ou use um navegador diferente.');
        }
    }).catch(error => {
        console.error('Erro no html2canvas:', error);
        document.body.removeChild(reportContent);
        alert('❌ Erro ao processar relatório. Verifique se o navegador permite downloads e tente novamente.');
    });
}
