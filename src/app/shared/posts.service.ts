import { Injectable } from '@angular/core';
import { BlogPost } from '../interfaces/blogpost.interface';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  public blogPosts: BlogPost[] = [
      {
        "id": 1,
        "imagem": "../../assets/woman-g97e895e90_1280.jpg",
        "resumo": "O Angular é um framework JavaScript popular para construção de aplicações web dinâmicas. Enquanto você trabalha com o Angular, aqui estão algumas dicas e melhores práticas para ajudar você...",
        "titulo": "Dominando o Angular: Dicas e Melhores Práticas",
        "conteudo": "<h2>Dominando o Angular: Dicas e Melhores Práticas</h2><p>O Angular é um framework JavaScript popular para construção de aplicações web dinâmicas. Enquanto você trabalha com o Angular, aqui estão algumas dicas e melhores práticas para ajudar você a dominar o framework:</p><h3>Estrutura de Pastas</h3><p>A organização da estrutura de pastas do seu projeto Angular é crucial para a manutenção e escalabilidade. Aqui estão algumas recomendações:</p><ul><li>Siga a estrutura de pastas recomendada pelo guia de estilo do Angular, separando componentes, serviços, estilos e recursos em diretórios diferentes.</li><li>Organize seus arquivos com base na funcionalidade, agrupando arquivos relacionados juntos.</li><li>Mantenha a estrutura de pastas plana, evitando aninhamentos profundos, para facilitar a navegação e manutenção.</li></ul><h3>Design de Componentes</h3><p>O design de componentes com uma única responsabilidade é um princípio fundamental no desenvolvimento Angular. Aqui estão algumas melhores práticas:</p><ul><li>Mantenha seus componentes focados e modulares, com um propósito claro e responsabilidades limitadas.</li><li>Use inputs e outputs de componentes para a comunicação entre componentes pais e filhos.</li><li>Evite lógica complexa e efeitos colaterais nos componentes, movendo-os para serviços para uma melhor separação de preocupações.</li></ul><h3>Otimização de Desempenho</h3><p>Optimizar o desempenho é crucial para fornecer aplicações Angular rápidas e responsivas. Aqui estão algumas dicas de otimização de desempenho:</p><ul><li>Use a estratégia de detecção de mudanças do Angular de forma eficaz para minimizar atualizações desnecessárias do DOM.</li><li>Use o carregamento lento (lazy loading) para módulos grandes ou pouco utilizados para reduzir o tempo de carregamento inicial de sua aplicação.</li><li>Otimizar seus pacotes de CSS e JavaScript para um carregamento mais rápido usando técnicas como minificação, tree shaking e code splitting.</li></ul><h3>Testes</h3><p>A escrita de testes é uma parte importante da construção de aplicações Angular robustas. Aqui estão algumas melhores práticas de teste:</p><ul><li>Escreva testes unitários abrangentes para seus componentes, serviços e outros artefatos Angular para identificar bugs e garantir a confiabilidade.</li><li>Use utilitários de teste do Angular, como TestBed e ComponentFixture, para criar ambientes de teste isolados para seus componentes.</li><li>Use ferramentas de cobertura de código para garantir uma cobertura de teste adequada e identificar áreas que precisam de mais testes.</li></ul>"
      },
      {
        "id": 2,
        "imagem": "../../assets/woman-gfd2021092_1280.jpg",
        "titulo": "Iniciando com Angular: Guia Passo a Passo",
        "resumo": "O Angular é um framework JavaScript popular para construção de aplicações web dinâmicas. Se você está começando com o Angular, aqui está um guia passo a passo para te ajudar...",
        "conteudo": "<h2>Iniciando com Angular: Guia Passo a Passo</h2><p>O Angular é um framework JavaScript popular para construção de aplicações web dinâmicas. Se você está começando com o Angular, aqui está um guia passo a passo para te ajudar:</p><h3>Instalação</h3><p>Para começar, você precisará instalar o Angular em seu projeto. Você pode fazer isso utilizando o Angular CLI, que é uma ferramenta de linha de comando para criar e gerenciar projetos Angular. Aqui está um exemplo de como instalar o Angular CLI via npm:</p><pre><code>npm install -g @angular/cli</code></pre><h3>Criação de Componentes</h3><p>Os componentes são a base do Angular e permitem criar interfaces de usuário reutilizáveis. Aqui estão os passos básicos para criar um componente Angular:</p><pre><code>ng generate component nome-do-componente</code></pre><h3>Configuração do Roteamento</h3><p>O roteamento é uma parte importante de muitas aplicações Angular. Aqui estão os passos básicos para configurar o roteamento em sua aplicação:</p><pre><code>ng generate module app-routing --flat --module=app</code></pre><h3>Consumindo Dados de APIs</h3><p>O Angular é amplamente utilizado para consumir dados de APIs externas. Aqui estão os passos básicos para consumir dados de APIs em sua aplicação Angular:</p><pre><code>import { HttpClient } from '@angular/common/http';<br>...</code></pre><h3>Compilação e Implantação</h3><p>Depois de construir sua aplicação Angular, você precisará compilar e implantar em um servidor de produção. Aqui estão os passos básicos para compilar e implantar sua aplicação:</p><pre><code>ng build --prod<br>...</code></pre>"
      }
    ]
  constructor() { }

  getPosts() {
    return this.blogPosts;
  }

  getPost(id: number): BlogPost {
    let foundIndex = this.blogPosts.findIndex(post => post.id == id);
    return this.blogPosts[foundIndex];
  }
}
