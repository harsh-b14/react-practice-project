import Teams from './Teams'
import TeamMembers from './TeamMembers';

export function Employees({employees, selectedTeam, handleCardClick, handleChange}){

    return(
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6">
                    <Teams selectedTeam={selectedTeam} handleChange={handleChange}/>
                </div>
            </div>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">
                        <TeamMembers employees={employees} handleCardClick={handleCardClick} selectedTeam={selectedTeam} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Employees
