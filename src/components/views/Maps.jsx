import DatamapsIndia from 'react-datamaps-india';

const MapsView = () => {

    return (
        <div className="svg">
            <DatamapsIndia
                regionData={{
                    Maharashtra: {
                        name:"Maharashtra",
                        value: 10,
                        data : "chenchu,asura,chenchu,asura,chenchu,asura,chenchu,asura "
                    },
                    Rajasthan: {
                        name:"Rajasthan",
                        value: 1000,
                        data : "chenchu,asura,chenchu,asura,chenchu,asura,chenchu,asura "
                    },
                    Gujarat: {
                        name:"Gujarat",
                        value: 800,
                        data : "chenchu,asura,chenchu,asura,chenchu,asura,chenchu,asura "
                    },
                    Karnataka: {
                        name:"Karnataka",
                        value: 700,
                        data : "chenchu,asura,chenchu,asura,chenchu,asura,chenchu,asura "
                    },
                    TamilNadu: {
                        name:"TamilNadu",
                        value: 190,
                        data : "chenchu,asura,chenchu,asura,chenchu,asura,chenchu,asura "
                    },
                    Kerala: {
                        name:"Kerala",
                        value: 890,
                        data : "chenchu,asura,chenchu,asura,chenchu,asura,chenchu,asura "
                    }
                    ,
                    'Andhra Pradesh': {
                        name:"Andhra Pradesh",
                        value: 190,
                        data : "chenchu,asura,chenchu,asura,chenchu,asura,chenchu,asura "
                    },
                    Telangana: {
                        name:"Telangana",
                        value: 190,
                        data : "chenchu,asura,chenchu,asura,chenchu,asura,chenchu,asura "
                    },
                }}
                hoverComponent={({ value }) => {
                    return (
                        <div>
                            <div>{value.name}</div>
                            <div>{value.data}</div>
                        </div>
                    );
                }}
                mapLayout={{
                    startColor: "#FFDAB9",
                    endColor: "#FF6347",
                    hoverTitle: "Count",
                    noDataColor: "#f5f5f5",
                    borderColor: "#8D8D8D",
                    hoverBorderColor: "#8D8D8D",
                    hoverColor: "green",
                    height: 10,
                    weight: 1
                }}
            />
        </div>
    )
}

export default MapsView