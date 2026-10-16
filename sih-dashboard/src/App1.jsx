import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const internships = [
  { id: 1, title: 'AI Intern', company: 'Google', location: 'Bangalore', skill: 'AI/ML' },
  { id: 2, title: 'Web Dev Intern', company: 'TCS', location: 'Indore', skill: 'Web Dev' },
  { id: 3, title: 'Data Science Intern', company: 'Infosys', location: 'Pune', skill: 'Data Science' },
  { id: 4, title: 'Frontend Intern', company: 'Wipro', location: 'Indore', skill: 'Web Dev' },
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
    { name: 'Web Dev', count: 2 },
    { name: 'Data Science', count: 1 },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', background: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ color: '#5a67d8', textAlign: 'center' }}>SIH Internship Dashboard</h1>
      
      <div style={{ marginBottom: '20px', background: 'white', padding: '15px', borderRadius: '8px' }}>
        <label><b>Skill: </b></label>
        <select value={skill} onChange={(e) => setSkill(e.target.value)}>
          <option>All</option>
          <option>AI/ML</option>
          <option>Web Dev</option>
          <option>Data Science</option>
        </select>

        <label style={{ marginLeft: '20px' }}><b>Location: </b></label>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option>All</option>
          <option>Bangalore</option>
          <option>Indore</option>
          <option>Pune</option>
        </select>
      </div>

      <div style={{ width: '100%', height: 300, background: 'white', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <h3>Internships by Skill</h3>
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

      <h3>Total: {filteredInternships.length} Internships Found</h3>
      <div>
        {filteredInternships.map(intern => (
          <div key={intern.id} style={{ border: '1px solid #ddd', padding: '15px', margin: '10px 0', borderRadius: '8px', background: 'white' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#5a67d8' }}>{intern.title}</h3>
            <p><b>Company:</b> {intern.company}</p>
            <p><b>Location:</b> {intern.location}</p>
            <p><b>Skill:</b> {intern.skill}</p>
            <button style={{ background: '#5a67d8', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;