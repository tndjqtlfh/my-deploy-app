import './App.css'

function SkillBadge({ name }: { name: string }) {
  const style = {
    display: 'inline-block',
    backgroundColor: '#e8f4f8',
    color: '#2d6a7a',
    padding: '4px 12px',
    borderRadius: '12px',
    margin: '4px',
    fontSize: '14px',
  };
  return <span style={style}>{name}</span>;
}
function App() {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Git',
  ];
  return (
    <div style={{
      textAlign: 'center' as const,
      padding: '50px',
      fontFamily: 'sans-serif',
    }}>
      <h1>홍길동의 포트폴리오</h1>
      <p>프론트엔드 개발을 배우고 있습니다.</p>
      <h2>기술 스택</h2>
      <div>
        {skills.map((skill) => (
          <SkillBadge key={skill} name={skill} />
        ))}
      </div>
      <footer style={{
        marginTop: '40px',
        color: '#888',
        fontSize: '13px',
      }}>
        <p>
          배포 시간: {new Date().toLocaleString('ko-KR')}
        </p>
        12 / 40
      </footer>
    </div>
  );
}
export default App;