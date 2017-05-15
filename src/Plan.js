import React from 'react'





class Plan extends React.Component {
        render() {

            var dayColor = {
                color: 'black',
                background: '#49d290',
            };

            var dayFlex = {
                display: 'flex',
                justifyContent: 'center',
            }
            return (
                <div>
                    <h1>Twój plan żywieniowy</h1>
                    <div style={dayFlex}>
                        <div style={dayColor}>
                            <h2>Poniedziałek</h2>
                            <div>
                                <p>(dodaj produkty)</p>
                            </div>
                        </div>
                        <div style={dayColor}>
                            <h2>Wtorek</h2>
                            <div>
                                <p>(dodaj produkty)</p>
                            </div>
                        </div>
                        <div style={dayColor}>
                            <h2>Środa</h2>
                            <div>
                                <p>(dodaj produkty)</p>
                            </div>
                        </div>
                        <div style={dayColor}>
                            <h2>Czwartek</h2>
                            <div>
                                <p>(dodaj produkty)</p>
                            </div>
                        </div>
                        <div style={dayColor}>
                            <h2>Piątek</h2>
                            <div>
                                <p>(dodaj produkty)</p>
                            </div>
                        </div>
                        <div style={dayColor}>
                            <h2>Sobota</h2>
                            <div>
                                <p>(dodaj produkty)</p>
                            </div>
                        </div>
                        <div style={dayColor}>
                            <h2>Niedziela</h2>
                            <div>
                                <p>(dodaj produkty)</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
}

export default Plan