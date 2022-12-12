const list = [
    {
      name: "Rafi Backe",
      jobTitle: "Research Assistant IV",
      age: 41
    },
    {
      name: "Gottfried Balser",
      jobTitle: "Mechanical Systems Engineer",
      age: 55
    },
    {
      name: "Lauraine Nore",
      jobTitle: "Assistant Media Planner",
      age: 61
    },
    {
      name: "Allayne Burstow",
      jobTitle: "Help Desk Technician",
      age: 48
    },
    {
      name: "Alan Tumber",
      jobTitle: "Senior Developer",
      age: 23
    },
    {
      name: "Carlyn Urrey",
      jobTitle: "Operator",
      age: 59
    },
    {
      name: "Kerrin Anstee",
      jobTitle: "Staff Accountant III",
      age: 38
    },
    {
      name: "Hube Tibbles",
      jobTitle: "VP Product Management",
      age: 41
    },
    {
      name: "Niki Core",
      jobTitle: "Engineer I",
      age: 18
    },
    {
      name: "Guntar Shailer",
      jobTitle: "Accounting Assistant I",
      age: 57
    },
    {
      name: "Sophi Brophy",
      jobTitle: "Senior Financial Analyst",
      age: 48
    },
    {
      name: "Arluene McRoberts",
      jobTitle: "Business Systems Development Analyst",
      age: 51
    },
    {
      name: "Belvia Fearnehough",
      jobTitle: "Paralegal",
      age: 50
    }
  ];
  
  console.log(list);
  //console.log(list.length);
  
  const sortArrayFunc = (val1, val2) => {
    return val1.age - val2.age;
  };
  
  const listSortedByAge = list.sort(sortArrayFunc);
  
  console.log(listSortedByAge);
  