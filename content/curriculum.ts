/**
 * Curriculum from "Vidyam deAi Web Platform Master Development Specification" (spec v2,
 * supplied 29 Oct 2026). Generated from the spec tables; edit here, not in pages.
 *
 * This file is server-only data. Pages decide what is public (stage headings, hours,
 * sample rows) and what stays behind the "Book Free Demo" gate. Gated rows must never
 * be rendered into the HTML, blurred or not, or anyone could read them in the page source.
 */
import "server-only";

export type Module = { code: string; title: string; hours: number; assessment: string };
export type Stage = { title: string; sub: string; framework: string; modules: Module[] };

export const k12Stages: Stage[] = [
  {
    "title": "Preparatory Stage",
    "sub": "Classes 3–5",
    "framework": "Integrated Computational Thinking (CT)",
    "modules": [
      {
        "code": "CT-301",
        "title": "Visual Reasoning & Pattern Recognition in Nature & Numbers",
        "hours": 12,
        "assessment": "Classroom Activity & Logic Worksheets"
      },
      {
        "code": "CT-302",
        "title": "Problem Decomposition & Logical Step-Ordering",
        "hours": 15,
        "assessment": "Interactive Puzzles & Storyboarding"
      },
      {
        "code": "CT-303",
        "title": "Unplugged Logic Games, Flowcharting & Algorithmic Games",
        "hours": 15,
        "assessment": "Unplugged Group Games & Board Activities"
      },
      {
        "code": "CT-304",
        "title": "Everyday AI Identification in Math & Environmental Studies (EVS)",
        "hours": 10,
        "assessment": "Observational Portfolio & Viva"
      }
    ]
  },
  {
    "title": "Middle Stage",
    "sub": "Classes 6–8",
    "framework": "Foundational CT & AI Literacy",
    "modules": [
      {
        "code": "CT-601",
        "title": "Advanced Computational Thinking, Abstraction & Flowcharts",
        "hours": 40,
        "assessment": "Algorithmic Flowchart Assignments"
      },
      {
        "code": "CT-602",
        "title": "AI Concepts, Purpose, Rule-Based vs ML & Manual Data Labeling",
        "hours": 20,
        "assessment": "Hands-on Data Annotation Lab"
      },
      {
        "code": "CT-603",
        "title": "Block-Based Coding (Scratch/Blockly) & Rule-Based Chatbots",
        "hours": 20,
        "assessment": "Scratch Interactive Project"
      },
      {
        "code": "CT-604",
        "title": "Interdisciplinary SDG Group Project & Research Poster Making",
        "hours": 20,
        "assessment": "Group Poster & Presentation"
      }
    ]
  },
  {
    "title": "Secondary Level",
    "sub": "Classes 9–10",
    "framework": "CBSE Skill Code 417: Artificial Intelligence",
    "modules": [
      {
        "code": "AI-417-01",
        "title": "Introduction to AI, Human Intelligence vs Smart Devices & Employability",
        "hours": 10,
        "assessment": "Theory Exam & Viva"
      },
      {
        "code": "AI-417-02",
        "title": "AI Project Cycle: Scoping (SDGs), Acquisition, Exploration, Modelling",
        "hours": 18,
        "assessment": "Project Scoping Framework Log"
      },
      {
        "code": "AI-417-03",
        "title": "Fundamental Python Programming: Syntax, Conditional Loops, Lists & Dicts",
        "hours": 25,
        "assessment": "Practical Python Coding Test"
      },
      {
        "code": "AI-417-04",
        "title": "Mathematics & Statistics for AI: Central Tendency, Probability & Linear Graphs",
        "hours": 12,
        "assessment": "Numerical Problem Sets"
      },
      {
        "code": "AI-417-05",
        "title": "Computer Vision (CV) Pixels, RGB Resolution, Features & ANN Basics",
        "hours": 20,
        "assessment": "OpenCV Image Manipulation Lab"
      },
      {
        "code": "AI-417-06",
        "title": "Natural Language Processing (NLP): Tokenization, Stemming & Bag-of-Words",
        "hours": 20,
        "assessment": "Text Classification Model Lab"
      },
      {
        "code": "AI-417-07",
        "title": "Generative AI Intro, Prompting Concepts, Bias & AI Ethics",
        "hours": 15,
        "assessment": "Ethics Case Study Essay"
      },
      {
        "code": "AI-417-08",
        "title": "Practical Lab Execution, Model Evaluation & CBSE Project Portfolio",
        "hours": 30,
        "assessment": "Practical Board Logbook & Viva"
      }
    ]
  },
  {
    "title": "Senior Secondary",
    "sub": "Classes 11–12",
    "framework": "CBSE Skill Code 843: AI & Data Science",
    "modules": [
      {
        "code": "AI-843-01",
        "title": "Advanced Python, OOP, Matrix Operations (NumPy) & DataFrames (Pandas)",
        "hours": 20,
        "assessment": "Data Processing Scripting Test"
      },
      {
        "code": "AI-843-02",
        "title": "Data Science Methodology, EDA, Cleaning & Data Storytelling",
        "hours": 18,
        "assessment": "Matplotlib/Seaborn Dashboard Lab"
      },
      {
        "code": "AI-843-03",
        "title": "Supervised & Unsupervised Machine Learning (Regression, Trees, Clustering)",
        "hours": 25,
        "assessment": "Scikit-Learn Model Training"
      },
      {
        "code": "AI-843-04",
        "title": "Model Evaluation Metrics: Confusion Matrix, Precision, Recall, ROC-AUC",
        "hours": 12,
        "assessment": "Model Diagnostic Report"
      },
      {
        "code": "AI-843-05",
        "title": "Computer Vision ('Making Machines See'): Filters, CNN Architectures & Object Detection",
        "hours": 22,
        "assessment": "CNN Classification Pipeline"
      },
      {
        "code": "AI-843-06",
        "title": "Advanced NLP: Word Embeddings (Word2Vec, TF-IDF) & Transformer Basics",
        "hours": 20,
        "assessment": "Text Sentiment Model"
      },
      {
        "code": "AI-843-07",
        "title": "30-Hour Practical Capstone Project, Documentation & Video Portfolio",
        "hours": 30,
        "assessment": "CBSE Board Capstone & Viva"
      }
    ]
  }
];

export const higherEdYears: Stage[] = [
  {
    "title": "Year 1",
    "sub": "Sems 1–2",
    "framework": "Foundational Math & Computing",
    "modules": [
      {
        "code": "UG-101",
        "title": "Linear Algebra & Multivariable Calculus (Matrices, Eigenvalues, Gradients)",
        "hours": 45,
        "assessment": "Mid-Term & End-Term Theory"
      },
      {
        "code": "UG-102",
        "title": "Probability, Statistics & Stochastic Processes (Distributions, Bayes Theorem)",
        "hours": 45,
        "assessment": "Statistical Problem Sets"
      },
      {
        "code": "UG-103",
        "title": "Computational Problem Solving & Basic Python Programming",
        "hours": 40,
        "assessment": "Python Lab Practicals"
      },
      {
        "code": "UG-104",
        "title": "Data Structures & Algorithms in C++ / Python (Trees, Graphs, Sorting)",
        "hours": 50,
        "assessment": "Data Structure Coding Lab"
      },
      {
        "code": "UG-105",
        "title": "Digital Logic & Computer Architecture (Boolean Algebra, Combinational Circuits)",
        "hours": 40,
        "assessment": "Digital Circuit Simulator"
      },
      {
        "code": "UG-106",
        "title": "Discrete Mathematics & Graph Theory (Set Logic, Graph Algorithms)",
        "hours": 40,
        "assessment": "Theory Assignment & Exam"
      }
    ]
  },
  {
    "title": "Year 2",
    "sub": "Sems 3–4",
    "framework": "Core AI, Data Engineering & DBMS",
    "modules": [
      {
        "code": "UG-201",
        "title": "Mathematical Foundations of ML & Convex Optimization (SVD, PCA, Lagrange)",
        "hours": 50,
        "assessment": "Optimization Lab & Theory"
      },
      {
        "code": "UG-202",
        "title": "Classical Artificial Intelligence (State-Space Search, A, Minimax, Logic)",
        "hours": 45,
        "assessment": "AI Search Algorithm Project"
      },
      {
        "code": "UG-203",
        "title": "Database Management Systems (DBMS), Relational Algebra & SQL/NoSQL",
        "hours": 45,
        "assessment": "SQL Querying & DB Design"
      },
      {
        "code": "UG-204",
        "title": "Statistical Machine Learning (SVMs, Naive Bayes, Random Forests, XGBoost)",
        "hours": 55,
        "assessment": "ML Benchmark Pipeline Lab"
      },
      {
        "code": "UG-205",
        "title": "Data Warehousing, Feature Engineering & Exploratory Data Analysis (EDA)",
        "hours": 45,
        "assessment": "ETL Pipeline Project"
      },
      {
        "code": "UG-206",
        "title": "Operating Systems, Concurrency & CUDA GPU Architecture Overview",
        "hours": 40,
        "assessment": "Kernel & Concurrency Lab"
      },
      {
        "code": "UG-207",
        "title": "Design & Analysis of Algorithms (Dynamic Programming, Greedy, NP-Hard)",
        "hours": 45,
        "assessment": "Algorithmic Complexity Exam"
      }
    ]
  },
  {
    "title": "Year 3",
    "sub": "Sems 5–6",
    "framework": "Deep Learning & Domain Specializations",
    "modules": [
      {
        "code": "UG-301",
        "title": "Deep Learning & Neural Networks (Backpropagation, PyTorch/TensorFlow)",
        "hours": 60,
        "assessment": "Deep Learning Model Lab"
      },
      {
        "code": "UG-302",
        "title": "Computer Vision & Image Processing (Object Detection, YOLO, Segmentation)",
        "hours": 50,
        "assessment": "Vision Object Tracking Lab"
      },
      {
        "code": "UG-303",
        "title": "Natural Language Processing (Text Preprocessing, TF-IDF, Attention)",
        "hours": 50,
        "assessment": "NLP Sentiment & Classification"
      },
      {
        "code": "UG-304",
        "title": "Transformer Architectures & LLMs (Self-Attention, BERT, GPT Pre-training)",
        "hours": 55,
        "assessment": "Transformer Pre-training Lab"
      },
      {
        "code": "UG-305",
        "title": "Reinforcement Learning & Autonomous Agents (MDPs, Q-Learning, Policy Gradients)",
        "hours": 50,
        "assessment": "RL Gym Environment Simulation"
      },
      {
        "code": "UG-306",
        "title": "Big Data Engineering at Scale (Apache Spark, Distributed Streaming)",
        "hours": 45,
        "assessment": "PySpark Cluster Processing"
      },
      {
        "code": "UG-307",
        "title": "AI Ethics, Fair Use & Data Governance (DPDP Act, Federated Learning)",
        "hours": 30,
        "assessment": "Governance Policy & Audit"
      }
    ]
  },
  {
    "title": "Year 4",
    "sub": "Sems 7–8",
    "framework": "Generative AI, MLOps & Capstone",
    "modules": [
      {
        "code": "UG-401",
        "title": "Generative AI, Retrieval-Augmented Generation (RAG) & Agent Frameworks",
        "hours": 60,
        "assessment": "Agentic RAG System Build"
      },
      {
        "code": "UG-402",
        "title": "MLOps, Model Deployment & Monitoring (vLLM, FastAPI, Docker, K8s, CI/CD)",
        "hours": 55,
        "assessment": "Production MLOps Pipeline"
      },
      {
        "code": "UG-403",
        "title": "Department Electives (Explainable AI / SHAP / Edge AI ONNX Quantization)",
        "hours": 40,
        "assessment": "Elective Seminar & Lab"
      },
      {
        "code": "UG-404",
        "title": "Major Capstone Project Phase-I (Problem Scoping, Dataset Curation)",
        "hours": 90,
        "assessment": "Phase-I Defense & Prototype"
      },
      {
        "code": "UG-405",
        "title": "Major Capstone Project Phase-II & Industry Internship / Semester Co-Op",
        "hours": 180,
        "assessment": "Industry Evaluation & Viva"
      }
    ]
  }
];

export const fdeModules: Stage[] = [
  {
    "title": "Module 1",
    "sub": "Enterprise Data Engineering & Ingestion",
    "modules": [
      {
        "code": "FDE-101",
        "title": "Production ETL/ELT Pipelines & Data Quality Validation (Airflow, PySpark)",
        "hours": 20,
        "assessment": "Airflow Pipeline Deployment"
      },
      {
        "code": "FDE-102",
        "title": "Real-Time Streaming & Event-Driven Ingestion (Kafka, WebSockets)",
        "hours": 20,
        "assessment": "Kafka Streaming Consumer"
      },
      {
        "code": "FDE-103",
        "title": "Enterprise Vector Databases & Hybrid Search (Pinecone, Qdrant, Milvus, BM25)",
        "hours": 25,
        "assessment": "Vector DB Indexing Benchmark"
      },
      {
        "code": "FDE-104",
        "title": "Enterprise Data Security, RBAC & VPC Isolation Compliance",
        "hours": 15,
        "assessment": "Security Audit & RBAC Setup"
      }
    ],
    "framework": ""
  },
  {
    "title": "Module 2",
    "sub": "Advanced RAG & Agentic Workflows",
    "modules": [
      {
        "code": "FDE-201",
        "title": "PDF/OCR Document Parsing (LlamaParse, Unstructured) & Dynamic Chunking",
        "hours": 20,
        "assessment": "OCR Extraction Pipeline"
      },
      {
        "code": "FDE-202",
        "title": "Advanced RAG Strategies (Query Rewriting, HyDE, Re-ranking Models)",
        "hours": 25,
        "assessment": "Hybrid RAG Evaluation"
      },
      {
        "code": "FDE-203",
        "title": "Autonomous AI Agents & Function Calling (LangGraph, CrewAI, AutoGen)",
        "hours": 30,
        "assessment": "Multi-Agent System Build"
      },
      {
        "code": "FDE-204",
        "title": "RAG & Agent Evaluation Frameworks (Ragas, TruLens, LLM-as-a-Judge)",
        "hours": 15,
        "assessment": "Automated Benchmark Suite"
      }
    ],
    "framework": ""
  },
  {
    "title": "Module 3",
    "sub": "Model Customization & Fine-Tuning",
    "modules": [
      {
        "code": "FDE-301",
        "title": "Open-Source LLMs (Llama 3, Mistral, Qwen) & Dataset Curation",
        "hours": 20,
        "assessment": "Instruction Dataset Prep"
      },
      {
        "code": "FDE-302",
        "title": "Parameter-Efficient Fine-Tuning (PEFT, LoRA, QLoRA, Unsloth)",
        "hours": 25,
        "assessment": "LoRA Adapter Fine-Tuning"
      },
      {
        "code": "FDE-303",
        "title": "Human Alignment & Preference Optimization (RLHF, DPO, KTO)",
        "hours": 20,
        "assessment": "DPO Alignment Pipeline"
      },
      {
        "code": "FDE-304",
        "title": "Domain Adaptation & Structured JSON Output Extraction",
        "hours": 20,
        "assessment": "JSON Function Extractor"
      }
    ],
    "framework": ""
  },
  {
    "title": "Module 4",
    "sub": "Production MLOps & Infrastructure",
    "modules": [
      {
        "code": "FDE-401",
        "title": "High-Throughput Inference Engines (vLLM, TensorRT-LLM, TGI)",
        "hours": 25,
        "assessment": "vLLM High-Throughput Serving"
      },
      {
        "code": "FDE-402",
        "title": "Model Quantization & Hardware Acceleration (AWQ, GGUF, FP8, CUDA)",
        "hours": 20,
        "assessment": "AWQ Quantization Benchmark"
      },
      {
        "code": "FDE-403",
        "title": "Containerization & Cloud Orchestration (Docker, Kubernetes, KServe)",
        "hours": 25,
        "assessment": "Kubernetes Cluster Deploy"
      },
      {
        "code": "FDE-404",
        "title": "CI/CD, Observability (Prometheus, LangSmith) & Token Cost Caching",
        "hours": 20,
        "assessment": "LangSmith Telemetry Setup"
      }
    ],
    "framework": ""
  },
  {
    "title": "Module 5",
    "sub": "Client Deployment & Capstone",
    "modules": [
      {
        "code": "FDE-501",
        "title": "AI Safety Alignment, System Safeguards & NeMo Guardrails Integration",
        "hours": 15,
        "assessment": "Safety & Guardrails Audit"
      },
      {
        "code": "FDE-502",
        "title": "Air-Gapped Private Cloud (VPC) & On-Premise AI Cluster Deployments",
        "hours": 20,
        "assessment": "VPC Cluster Installation"
      },
      {
        "code": "FDE-503",
        "title": "Architecture Scoping, Client Proof-of-Concept (PoC) & ROI Modeling",
        "hours": 15,
        "assessment": "PoC Architecture Proposal"
      },
      {
        "code": "FDE-504",
        "title": "Real-World Enterprise Capstone Deployment & Client Handover",
        "hours": 40,
        "assessment": "Live Client System Handover"
      }
    ],
    "framework": ""
  }
];

export const stageHours = (s: Stage) => s.modules.reduce((n, m) => n + m.hours, 0);
export const totalHours = (stages: Stage[]) => stages.reduce((n, s) => n + stageHours(s), 0);
export const moduleCount = (stages: Stage[]) => stages.reduce((n, s) => n + s.modules.length, 0);
