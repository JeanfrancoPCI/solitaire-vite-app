import './groups.css';

export const renderGroups = (divElement, game) => {

    for(let group of game.groups) {
        let divGroup = renderGroup(group)
        divElement.append(divGroup);
    }
}   

const renderGroup = (group) => {

    let divGroup = document.createElement('div');
    divGroup.classList.add('group');
    let groupCss = (() => {
        switch(group.sign) {
            case "S":
                return 'spades';
            case "C":
                return 'clubs';
            case "D":
                return 'diamonds';
            case "H":
                return "hearts";
        }
    })();
    divGroup.classList.add(groupCss);
    return divGroup;
}