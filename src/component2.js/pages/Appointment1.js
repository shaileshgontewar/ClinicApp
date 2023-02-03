const Appointment1 = ({ data }) => {
  console.log(data);
  let time = data?.data?.map((d) => {
    return {
      date: d.appointmentDate,
      time: `${d.appointmentstartime} - ${d.appointmentendtime}`,
    };
  });
  let days = data?.appointmentdatedata?.map((d) => {
    return {
      week: d.appointmentDayOfWeek,
      date: d.appointmentDate,
    };
  });

  // for (let i = 0; i < days?.length - 1; i++) {
  //   console.log(days[i].week, days[i].date);
  // }
  // for (let j = 0; j < time?.length - 1; j++) {
  //   console.log(time[j].date, time[j].time);
  // }

  return (
    <div className="main-table">
      <div className="date-div">
        {days?.map((value) => (
          <div>
            <p className="week">{value.week}</p>
            <p className="date">{value.date}</p>
          </div>
        ))}
      </div>
      <div className="time-div">
        {time?.map((value) => (
          <div>
            <p className="time">{value.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointment1;
