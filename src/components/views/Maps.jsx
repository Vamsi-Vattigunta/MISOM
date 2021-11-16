import DatamapsIndia from 'react-datamaps-india';

const MapsView = () => {

    return (
        <div className="svg">
            <DatamapsIndia
                regionData={{
                    Maharashtra: {
                        name: "Maharashtra",
                        value: 10,
                        data: "chenchu,asura,gutob,asura,bodo,dongria,kultia,kolam "
                    },
                    Rajasthan: {
                        name: "Rajasthan",
                        value: 1000,
                        data: "chenchu,asura,gutob,asura,bodo,dongria,kultia,kolam "
                    },
                    Gujarat: {
                        name: "Gujarat",
                        value: 800,
                        data: "chenchu,asura,gutob,asura,bodo,dongria,kultia,kolam "
                    },
                    Karnataka: {
                        name: "Karnataka",
                        value: 700,
                        data: "chenchu,asura,gutob,asura,bodo,dongria,kultia,kolam "
                    },
                    TamilNadu: {
                        name: "TamilNadu",
                        value: 190,
                        data: "chenchu,asura,gutob,asura,bodo,dongria,kultia,kolam "
                    },
                    Kerala: {
                        name: "Kerala",
                        value: 890,
                        data: "chenchu,asura,gutob,asura,bodo,dongria,kultia,kolam ",
                    }
                    ,
                    'Andhra Pradesh': {
                        name: "Andhra Pradesh",
                        value: 190,
                        data: "chenchu,asura,gutob,asura,bodo,dongria,kultia,kolam "
                    },
                    Telangana: {
                        name: "Telangana",
                        value: 190,
                        data: "chenchu,asura,gutob,asura,bodo,dongria,kultia,kolam "
                    },
                }}
                hoverComponent={({ value }) => {
                    return (
                        <div>
                            <div>{value.name}</div>
                            <div className="data">{value.data}</div>
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
                }}
            />
        </div>
    )
}

export default MapsView