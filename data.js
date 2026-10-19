const DOCTORS=[
{id:1,name:"Dr. Aarav Menon",dept:"Cardiology",exp:14,rating:4.9,fee:800,days:"Mon - Fri",avail:true},
{id:2,name:"Dr. Priya Nair",dept:"Neurology",exp:11,rating:4.8,fee:900,days:"Mon - Thu",avail:true},
{id:3,name:"Dr. Karthik Raja",dept:"Orthopedics",exp:9,rating:4.7,fee:700,days:"Tue - Sat",avail:false},
{id:4,name:"Dr. Meera Iyer",dept:"Pediatrics",exp:12,rating:4.9,fee:600,days:"Mon - Sat",avail:true},
{id:5,name:"Dr. Rahul Sharma",dept:"Dermatology",exp:7,rating:4.6,fee:650,days:"Mon - Fri",avail:true},
{id:6,name:"Dr. Anitha Selvam",dept:"Gynecology",exp:15,rating:4.9,fee:850,days:"Mon - Sat",avail:false}];
const PATIENTS=[
{id:"P1001",name:"Ravi Kumar",age:42,gender:"Male",blood:"B+",phone:"98765 43210",cond:"Hypertension",last:"12 Oct 2026"},
{id:"P1002",name:"Lakshmi Devi",age:35,gender:"Female",blood:"O+",phone:"98410 22331",cond:"Migraine",last:"10 Oct 2026"},
{id:"P1003",name:"Arun Prakash",age:58,gender:"Male",blood:"A+",phone:"90030 11872",cond:"Diabetes Type 2",last:"09 Oct 2026"},
{id:"P1004",name:"Divya Shankar",age:27,gender:"Female",blood:"AB+",phone:"99620 45610",cond:"Skin Allergy",last:"08 Oct 2026"},
{id:"P1005",name:"Mohammed Faizal",age:49,gender:"Male",blood:"O-",phone:"97890 33214",cond:"Knee Pain",last:"06 Oct 2026"},
{id:"P1006",name:"Sneha Raj",age:8,gender:"Female",blood:"A-",phone:"94440 77120",cond:"Seasonal Fever",last:"05 Oct 2026"},
{id:"P1007",name:"Gopal Krishnan",age:64,gender:"Male",blood:"B-",phone:"98940 56120",cond:"Cardiac Checkup",last:"03 Oct 2026"}];
let APPTS=[
{id:"A201",patient:"Ravi Kumar",doctor:"Dr. Aarav Menon",dept:"Cardiology",date:"15 Oct 2026",time:"10:00 AM",status:"Confirmed"},
{id:"A202",patient:"Lakshmi Devi",doctor:"Dr. Priya Nair",dept:"Neurology",date:"15 Oct 2026",time:"11:30 AM",status:"Pending"},
{id:"A203",patient:"Sneha Raj",doctor:"Dr. Meera Iyer",dept:"Pediatrics",date:"15 Oct 2026",time:"12:15 PM",status:"Confirmed"},
{id:"A204",patient:"Divya Shankar",doctor:"Dr. Rahul Sharma",dept:"Dermatology",date:"16 Oct 2026",time:"09:30 AM",status:"Pending"},
{id:"A205",patient:"Mohammed Faizal",doctor:"Dr. Karthik Raja",dept:"Orthopedics",date:"16 Oct 2026",time:"02:00 PM",status:"Cancelled"},
{id:"A206",patient:"Arun Prakash",doctor:"Dr. Aarav Menon",dept:"Cardiology",date:"14 Oct 2026",time:"04:00 PM",status:"Completed"}];
const MEDS=[
{name:"Paracetamol 500mg",cat:"Analgesic",stock:420,max:500,price:12},
{name:"Amoxicillin 250mg",cat:"Antibiotic",stock:85,max:300,price:48},
{name:"Metformin 500mg",cat:"Antidiabetic",stock:240,max:400,price:22},
{name:"Atorvastatin 10mg",cat:"Cardiac",stock:30,max:250,price:65},
{name:"Cetirizine 10mg",cat:"Antihistamine",stock:310,max:400,price:9},
{name:"Pantoprazole 40mg",cat:"Antacid",stock:150,max:300,price:35}];
const LABS=[
{id:"L501",patient:"Ravi Kumar",test:"Lipid Profile",date:"13 Oct 2026",status:"Ready"},
{id:"L502",patient:"Arun Prakash",test:"HbA1c",date:"13 Oct 2026",status:"Ready"},
{id:"L503",patient:"Lakshmi Devi",test:"MRI Brain",date:"14 Oct 2026",status:"Processing"},
{id:"L504",patient:"Gopal Krishnan",test:"ECG & Echo",date:"15 Oct 2026",status:"Processing"},
{id:"L505",patient:"Sneha Raj",test:"Complete Blood Count",date:"12 Oct 2026",status:"Ready"},
{id:"L506",patient:"Mohammed Faizal",test:"X-Ray Knee",date:"11 Oct 2026",status:"Ready"}];
const BILLS=[
{id:"INV-3101",patient:"Ravi Kumar",desc:"Consultation + ECG",amt:1800,status:"Paid"},
{id:"INV-3102",patient:"Arun Prakash",desc:"HbA1c + Medicines",amt:2450,status:"Paid"},
{id:"INV-3103",patient:"Lakshmi Devi",desc:"MRI Brain",amt:6200,status:"Pending"},
{id:"INV-3104",patient:"Sneha Raj",desc:"Pediatric Consultation",amt:600,status:"Paid"},
{id:"INV-3105",patient:"Gopal Krishnan",desc:"Cardiac Package",amt:9800,status:"Overdue"}];
const NOTES=[
{ico:"🚑",t:"Emergency bed ICU-3 is now available",m:"5 min ago"},
{ico:"🧪",t:"Lab report ready for Ravi Kumar (Lipid Profile)",m:"22 min ago"},
{ico:"💊",t:"Atorvastatin 10mg stock is running low (30 left)",m:"1 hr ago"},
{ico:"📅",t:"New appointment request from Divya Shankar",m:"2 hr ago"},
{ico:"💳",t:"Invoice INV-3105 is overdue by 5 days",m:"Yesterday"}];
const WEEK=[42,55,48,70,64,38,29], MONTHS=["May","Jun","Jul","Aug","Sep","Oct"], REV=[3.2,3.8,3.5,4.4,4.9,5.6];
const DEPTS=[["Cardiology",28],["Neurology",18],["Pediatrics",22],["Orthopedics",16],["Others",16]];
