const AchievementsList = ({ achievements }) => {
    return (
      <div className="achievement-list">
        {achievements.map(achievement => (
            <div class="row mb-5 text-center text-md-left p-2">
                <div class="col-md-3 ">
                    <img src={achievement.img} class="rounded trophy" alt="missionImage"/>
                </div>
                <div class="col-md-2 mt-4">
                    <p class="achieve ">
                        {achievement.result}
                    </p>
                </div>
                <div class="col-md-3 mt-4">
                    <p class="achieve">
                        {achievement.date}
                    </p>
                </div>
                <div class="col-md-4 mt-4">
                    <p class="achieve">
                        {achievement.event}
                    </p>
                </div>
            </div>
        ))}
      </div>
    );
  }
   
  export default AchievementsList;





