import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const internships = [
  { id: 1, title: 'AI Intern', company: 'Google', location: 'Bangalore', skill: 'AI/ML' },
  { id: 2, title: 'Web Dev Intern', company: 'TCS', location: 'Indore', skill: 'Web Dev' },
  { id: 3, title: 'Data Science Intern', company: 'Infosys', location: 'Pune', skill: 'Data Science' },
];

function App() {
  const [skill, setSkill] = useState('All');
  const [location, setLocation] = useState('All');

  const filteredInternships = internships.filter(intern => 
    (skill === 'All' || intern.skill === skill) && 
    (location === 'All' || intern.location === location)
  );

  const chartData = [
    { name: 'AI/ML', count: 1 },
    { name: 'Web Dev', count: 1 },
    { name: 'Data Science', count: 1 },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>SIH Internship Dashboard</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <select value={skill} onChange={(e) => setSkill(e.target.value)}>
          <option>All</option>
          <option>AI/ML</option>
          <option>Web Dev</option>
          <option>Data Science</option>
        </select>

        <select value={location} onChange={(e) => setLocation(e.target.value)} style={{ marginLeft: '10px' }}>
          <option>All</option>
          <option>Bangalore</option>
          <option>Indore</option>
          <option>Pune</option>
        </select>
      </div>

      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#5a67d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        {filteredInternships.map(intern => (
          <div key={intern.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '8px' }}>
            <h3>{intern.title}</h3>
            <p><b>Company:</b> {intern.company}</p>
            <p><b>Location:</b> {intern.location}</p>
            <p><b>Skill:</b> {intern.skill}</p>
            <button>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;