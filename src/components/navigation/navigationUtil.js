export const navigate = (text, setTab, setOpen, open) => {
    if (text === 'VIDEOS') {
        setTab('/Research');
    }
    else if (text === 'TRIBES') {
        setTab('/');
    }
    else if (text === 'PUBLICATIONS') {
        setOpen(!open);
    }
    else if (text === 'BOOKS') {
        setTab('/Books');
    }
    else if (text === 'ARTICLES') {
        setTab('/Articles');
    }
    else if (text === 'ABOUT ME') {
        setTab('/AboutMe');
    }
    else if (text === 'MAPS') {
        setTab('/Maps');
    }
};
