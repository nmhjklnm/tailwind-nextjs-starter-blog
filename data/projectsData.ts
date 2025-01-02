interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}


const projectsData: Project[] = [
  {
    title: 'llama_index',
    description: '在LlamaIndex-Core的流式API服务中修复了异步IO阻塞问题。',
    imgSrc: '/static/images/llama_index.png', // 图片路径可根据实际需求修改
    href: 'https://github.com/run-llama/llama_index',
  },
  {
    title: 'LazyLLM',
    description: '参与开发LazyLLM架构，维护项目文档，管理版本发布和问题跟踪。',
    imgSrc: '/static/images/lazyllm.jpeg', // 图片路径可根据实际需求修改
    href: 'https://github.com/LazyAGI/LazyLLM',
  },
];

export default projectsData
