import './App.css'
import Header from './Header'
import Footer from './Footer'
import Employees from './Employees'
import GroupedTeamMembers from './GroupedTeamMembers'
import NotFound from './NotFound'
import Nav from './Nav'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {

  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamA");

    const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [
        {
            id: 0,
            fullName: "Bob Jones",
            designation: "JavaScript Developer",
            gender: "male",
            teamName: "TeamA"
        },
        {
            id: 1,
            fullName: "Jill Bailey",
            designation: "Node Developer",
            gender: "female",
            teamName: "TeamA"
        },
        {
            id: 2,
            fullName: "Gail Shepherd",
            designation: "Java Developer",
            gender: "female",
            teamName: "TeamA"
        },
        {
            id: 3,
            fullName: "Sam Reynolds",
            designation: "React Developer",
            gender: "male",
            teamName: "TeamB"
        },
        {
            id: 4,
            fullName: "David Henry",
            designation: "DotNet Developer",
            gender: "male",
            teamName: "TeamB"
        },
        {
            id: 5,
            fullName: "Sarah Blake",
            designation: "SQL Server DBA",
            gender: "female",
            teamName: "TeamB"
        },
        {
            id: 6,
            fullName: "James Bennet",
            designation: "Angular Developer",
            gender: "male",
            teamName: "TeamC"
        },
        {
            id: 7,
            fullName: "Jessica Faye",
            designation: "API Developer",
            gender: "female",
            teamName: "TeamC"
        },
        {
            id: 8,
            fullName: "Lita Stone",
            designation: "C++ Developer",
            gender: "female",
            teamName: "TeamC"
        },
        {
            id: 9,
            fullName: "Daniel Young",
            designation: "Python Developer",
            gender: "male",
            teamName: "TeamD"
        },
        {
            id: 10,
            fullName: "Adrian Jacobs",
            designation: "Vue Developer",
            gender: "male",
            teamName: "TeamD"
        },
        {
            id: 11,
            fullName: "Devin Monroe",
            designation: "Graphic Designer",
            gender: "male",
            teamName: "TeamD"
        }
    ]);

    useEffect(() => {
      localStorage.setItem('employeeList', JSON.stringify(employees));
    }, [employees]);

    useEffect(() => {
      localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
    }, [selectedTeam]);

    function handleChange(event){
        setTeam(event.target.value);
    }

    function handleCardClick(event){
        const transformedEmployee = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
        ?(employee.teamName === selectedTeam)?{...employee, teamName: ''}:{...employee, teamName: selectedTeam}
        :employee); 
        
        setEmployees(transformedEmployee);
    }

  return (
    <Router>
      <Nav /> 
      <Header selectedTeam={selectedTeam}
        teamMemberCount = {employees.filter((employee) => employee.teamName === selectedTeam).length}
      /> 
      <Routes>
        <Route path="/" element={<Employees employees={employees} 
          selectedTeam={selectedTeam} 
          handleCardClick={handleCardClick}
          handleChange={handleChange}
        />}>
        </Route>
        <Route path= '/GroupedTeamMembers' element={<GroupedTeamMembers employees={employees} selectedTeam={selectedTeam} setTeam={setTeam} />}>
        </Route>
        <Route path='*' element={<NotFound />}>
        </Route>
      </Routes>
      <Footer />
    </Router>
  )
}
