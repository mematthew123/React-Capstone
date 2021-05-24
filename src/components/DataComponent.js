
function Data(props) {
    // console.log(props.data.weather);
    return (
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-12 col-md-5 col-sm-12 col-xs-12">
                    <div class="card text-black">
                        <div class="div1 p-4 p-md-5 ">
                            <h2>{props.data.weather.name}</h2>
                            <h1>{parseInt(props.data.weather.main.temp)}<sup>°F </sup> </h1>
                            <p class="my-0">Feels like {parseInt(props.data.weather.main.feels_like)}</p>
                            <h4 class="my-0">{props.data.weather.weather[0].main}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;