const dummyData = {
  id: 1,
  type: "Admission Notification",
  title: "B.Tech 2024 Admission Notification",
  category: "Admissions",
  university: "HBTU",
  course: "B.Tech",
  applicationMode: "Online",
  description: "Admission notification for the B.Tech program at HBTU for the academic year 2024-25.",
  selectionProcess: "Entrance Exam and Counseling",

  basicInfo: true,
  importantDates: true,
  allLinks: true,
  documents: true,

  importantInstructions: "Ensure all documents are uploaded in the correct format.",
  documentLink: "http://example.com/admission-documents",
  importantDates: {
    _id: "61e2f3b4b5f3e4a2d4f7c8a1",
    applicationStart: "2024-01-15T00:00:00Z",
    applicationEnd: "2024-02-28T23:59:59Z",
    feeLastDate: "2024-02-25T23:59:59Z",
    correctionLastDate: "2024-03-10T23:59:59Z",
    examDate: "2024-04-20T10:00:00Z",
    admitCardDate: "2024-04-10T10:00:00Z",
    answerKeyDate: "2024-04-25T10:00:00Z",
    revisedAnswerKeyDate: "2024-04-30T10:00:00Z",
    resultDate: "2024-05-15T10:00:00Z",
  },
  eligibility: "Candidates must have passed 10+2 with Physics, Chemistry, and Mathematics.",
  applicationFee: {
    general: 1000,
    obc: 800,
    sc_st: 500,
    ph: 0,
  },
  ageLimit: {
    min: 17,
    max: 25,
    relaxationDetails: "Relaxation of 3 years for OBC/SC/ST candidates.",
  },

  importantLinks: {
    importantLinks: [
      {
        label: "Download Brochure",
        url: "http://example.com/brochure",
      },
      {
        label: "Apply Online",
        url: "http://example.com/apply",
      },
      {
        label: "Official Website",
        url: "http://hbtu.ac.in",
      },
    ],
  },

  publish: true,
  releaseDate: "2024-01-10",
  isNew: true,
  createdAt: "2024-01-10T12:00:00Z",

  documents: {
    documentLink: [
      {
        name: "Admission Guidelines",
        description: "Detailed admission guidelines for 2024.",
        url: "http://example.com/admission-guidelines",
      },
      {
        name: "Exam Syllabus",
        description: "Syllabus for the entrance exam.",
        url: "http://example.com/syllabus",
      },
    ],
  },
};

console.log(dummyData);
