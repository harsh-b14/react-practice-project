import TeamMemberCard from "./TeamMemberCard"

export function TeamMembers({employees, handleCardClick, selectedTeam}){
    return(
        employees.map((employee) => (
            <TeamMemberCard employee={employee} handleCardClick={handleCardClick} selectedTeam={selectedTeam} />
        ))
    )
}

export default TeamMembers