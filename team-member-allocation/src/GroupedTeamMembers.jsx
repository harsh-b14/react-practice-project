import { useState } from "react"

export function GroupedTeamMembers({employees, selectedTeam, setTeam}){

    const[groupedEmployees, setGroupedData] = useState(groupedTeamMember());

    function groupedTeamMember(){
        var teams = [];

        var teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
        var teamA = {team:'TeamA', members:teamAMembers, collpased: selectedTeam === 'TeamA'?false:true};
        teams.push(teamA);

        var teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
        var teamB = {team:'TeamB', members:teamBMembers, collpased: selectedTeam === 'TeamB'?false:true};
        teams.push(teamB);

        var teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
        var teamC = {team:'TeamC', members:teamCMembers, collpased: selectedTeam === 'TeamC'?false:true};
        teams.push(teamC);

        var teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
        var teamD = {team:'TeamD', members:teamDMembers, collpased: selectedTeam === 'TeamD'?false:true};
        teams.push(teamD);

        return teams;

    }

    function hadleTeamClick(event){
        var transformedGroupData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id
                                                        ?{...groupedData, collpased:!groupedData.collpased}
                                                        :groupedData);
        setGroupedData(transformedGroupData);
        setTeam(event.currentTarget.id);
    }

    return(
        <main className="container">
            {
                groupedEmployees.map((item) =>{
                    return(
                        <div key={item.team} className="card mt-2" style={{cursor: "pointer"}}>
                            <h4 id={item.team} className="card-header bg-white text-secondary" onClick={hadleTeamClick}> 
                                Team Name: {item.team}
                            </h4>
                            <div id={"collapse_" + item.team} className={item.collpased?"collapse":""}>
                                <hr />
                                {
                                    item.members.map(member => {
                                        return(
                                            <div className="mt-2">
                                                <h5 className="card-title mt-2">
                                                    <span className="text-dark">Full Name: {member.fullName}</span>    
                                                </h5>
                                                <p>Designation: {member.designation}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    );  
                })
            }
        </main>
    )
}

export default GroupedTeamMembers