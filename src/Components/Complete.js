import gif from '../Assets/dogpizza.gif'

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export default function Complete(){


    return (
        <div style={style}>
        <img src={gif}></img>
        </div>
    )
}