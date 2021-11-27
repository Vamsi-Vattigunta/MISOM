import DatamapsIndia from 'react-datamaps-india';

const MapsView = () => {

    return (
        <div className="svg">
            <DatamapsIndia
                regionData={{
                    Maharashtra: {
                        name: "Maharashtra",
                        value: 0,
                        data: "chenchu",
                        data1: "asura",
                        data2: "gutob",
                        data3: "asura",
                        data4: "bodo",
                        data5: "dongria",
                        data6: "kultia",
                        data7: "kolam "
                    },
                    Rajasthan: {
                        name: "Rajasthan",
                        value: 0,
                        data: "chenchu",
                        data1: "asura",
                        data2: "gutob",
                        data3: "asura",
                    },
                    Gujarat: {
                        name: "Gujarat",
                        value: 0,
                        data: "chenchu",
                        data1: "asura",
                    },
                    Karnataka: {
                        name: "Karnataka",
                        value: 0,
                        data: "chenchu",
                        data1: "asura",
                    },
                    TamilNadu: {
                        name: "TamilNadu",
                        value: 0,
                        data: "chenchu",
                        data1: "asura",
                        data2: "gutob",
                        data3: "asura",
                    },
                    Kerala: {
                        name: "Kerala",
                        value: 0,
                        data: "chenchu",
                        data1: "asura",
                        data2: "gutob",
                        data3: "asura",
                    }
                    ,
                    'Andhra Pradesh': {
                        value: 0,
                        name: "Andhra Pradesh",
                        data: "chenchu",
                        data1: "asura",
                        data2: "gutob",
                        data3: "asura",
                        data4: "bodo",
                        data5: "dongria",
                        data6: "kultia",
                        data7: "kolam "
                    },
                    Telangana: {
                        value: 0,
                        name: "Telangana",
                        data: "chenchu",
                        data1: "asura",
                        data2: "gutob",
                        data3: "asura",
                    },
                    Delhi: {
                        name: "Telangana",
                        data: "chenchu",
                        data1: "asura",
                        data2: "gutob",
                        data3: "asura",
                    },
                }}
                hoverComponent={({ value }) => {
                    return (
                        <div>
                            <div>state:- {value.name}</div>
                            <div className="data">Tribes:- {value.data}</div>
                            <div className="data">{value.data1}</div>
                            <div className="data">{value.data2}</div>
                            <div className="data">{value.data3}</div>
                            <div className="data">{value.data4}</div>
                            <div className="data">{value.data5}</div>
                            <div className="data">{value.data6}</div>
                            <div className="data">{value.data7}</div>
                        </div>
                    );
                }}
                mapLayout={{
                    startColor: "#f5f5f5",
                    endColor: "#f5f5f5",
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