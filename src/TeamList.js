const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);


const TeamList = ({teams}) => {
    return (
        <div className="team-list">
          {teams.map(team => (
            
            <div className="team-preview" key={team.id} >
                <div class="row my-5">
                <ColoredLine color="white"/>
                    <div class="col-md-3">
                        <img src={team.image} class="rounded float-start players" alt="missionImage"/>
                    </div>
                    <div class="col-xl-9 text-white">
                        <div>
                            <h2>{team.name}</h2>
                        </div>
                        <div>
                            <p class="fs-5 ">
                                {team.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
  
          ))}
        </div>
      );
    }

 
export default TeamList;