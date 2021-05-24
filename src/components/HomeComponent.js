import { Component } from 'react';

class Home extends Component {

    // console.log(props);

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col align-self-center">
                        <img 
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/de414292-746d-4d9e-a4f9-d855f76f5f2e/d3bj3sh-0d7127f5-6c2a-4b36-b590-32b9c19f7a08.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RlNDE0MjkyLTc0NmQtNGQ5ZS1hNGY5LWQ4NTVmNzZmNWYyZVwvZDNiajNzaC0wZDcxMjdmNS02YzJhLTRiMzYtYjU5MC0zMmI5YzE5ZjdhMDguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5mLNacruMbFywNNEBonOHNvWLVGZLhheqvNGd3iNyDE" 
                        alt="Earth"
                        className="rounded mx-auto d-block" 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;