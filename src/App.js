// import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [activities,setActivities] = useState([])
  const [expandedActivity, setExpandeActivity] = useState(null)

const fetchActivity = async () => {
  try{
    const response = await fetch('https://bored.api.lewagon.com/api/activity')
    const data = await response.json()
    setActivities(prevActivites => [...prevActivites,data])
  } catch (error){
    console.error('api yuklenırken hata oluştu')
  }
}

const toggleDetails = (key) =>{
  setExpandeActivity(expandedActivity === key ? null : key)}
  return (
<div className="text-center bg-slate-400 h-screen">
 <button onClick={fetchActivity} className="border-2 border-green-700 font-bold text-orange-800 p-2 rounded-md">Generate Activity</button>
 <ul className="mt-5">
  {activities.map(activity =>(
    <li key={activity.key} className="my-4">
      <p className="text-lg font-semibold text-green-700">{activity.activity}</p>
      <div className="pl-36 ml-36 mb-5">
      <button onClick={()=>toggleDetails(activity.key)} className="border-2 p-1 rounded-md text-green-900 border-orange-600 font-bold">
        {expandedActivity === activity.key ? 'Collapse' : 'Expand'}
      </button>
      </div>
      {expandedActivity === activity.key && (
        <div>
          <p><strong>Type:</strong>{activity.type}</p>
          <p><strong>Participants:</strong>{activity.participants}</p>
          <p><strong>Price:</strong>{activity.price}</p>
          <p><strong>Link:</strong>{activity.link}</p>
          <p><strong>Key:</strong>{activity.key}</p>
          <p><strong>Accessibility:</strong>{activity.accessibility}</p>

        </div>
      )}
    </li>
  ))}
 </ul>
</div>
  )
}



export default App;
