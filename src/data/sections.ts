interface Section {
  id: string;
  title: string;
  content: string;
  chart?: 'neuron-type' | 'applications' | 'research-growth';
}

export const sections: Section[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: 'An artificial neural network (ANN) is a computational model inspired by the biological neural networks that constitute animal brains. These systems learn to perform tasks by considering examples, generally without being programmed with task-specific rules.'
  },
  {
    id: 'history',
    title: 'History',
    content: 'The history of artificial neural networks began with Warren McCulloch and Walter Pitts (1943) who created a computational model for neural networks based on mathematics and algorithms. This first artificial neural network was very simple compared to today\'s models, but it launched the field of AI research.'
  },
  {
    id: 'neuron-types',
    title: 'Neuron Types',
    content: 'Different types of neurons serve different purposes in artificial neural networks. The distribution and prevalence of these types can vary depending on the network architecture and intended application.',
    chart: 'neuron-type'
  },
  {
    id: 'applications',
    title: 'Applications',
    content: 'Artificial neural networks have been applied across a wide range of industries and domains. Their ability to learn patterns and solve complex problems has made them particularly valuable in certain sectors.',
    chart: 'applications'
  },
  {
    id: 'development-timeline',
    title: 'Development Timeline',
    content: 'The field of neural networks has seen exponential growth in research and applications over the past decades.',
    chart: 'research-growth'
  },
  {
    id: 'training-methods',
    title: 'Training Methods',
    content: 'Neural networks can be trained using various methods, including supervised learning, unsupervised learning, and reinforcement learning. Each approach has its own advantages and use cases.'
  },
  {
    id: 'network-architectures',
    title: 'Network Architectures',
    content: 'Different network architectures have been developed to address specific types of problems. These include feedforward networks, convolutional neural networks (CNNs), recurrent neural networks (RNNs), and transformers.'
  },
  {
    id: 'challenges',
    title: 'Challenges and Limitations',
    content: 'While powerful, neural networks face several challenges including the need for large amounts of training data, computational intensity, and the "black box" nature of their decision-making process.'
  }
];