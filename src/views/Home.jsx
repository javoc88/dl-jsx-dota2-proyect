import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <>
      <Container className="home-container">
        <div className="text-area">
          <h2>Join the</h2>
          <h1>BATTLE OF THE ANCIENTS</h1>
          <p>
            Every day, millions of players worldwide enter the battle as one of
            over a hundred Dota Heroes in a 5v5 team clash.
            <br />
            Dota is the deepest multi-player action RTS game ever made and
            there is always a new strategy or tactic to discover.
            <br />
            It is completely free to play and always will be.
            <br />
            Start defending your ancient now.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Home;
