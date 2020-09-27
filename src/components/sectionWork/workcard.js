import React from "react";

class CardHeader extends React.Component {
    render() {
        const { image } = this.props;
        var style = {
            backgroundImage: 'url(' + image + ')',
        };
        return (
            <header style={style} id={image} className="card-header">
                <h4 className="card-header--title">{this.props.title}</h4>
            </header>
        )
    }
}

class Button extends React.Component {
    render() {
        return (
            <button className="button button-primary">
                <i className="fa fa-chevron-right"></i> Find out more
            </button>
        )
    }
}

class CardBody extends React.Component {
    render() {
        return (
            <div className="card-body">
                <p className="date">{this.props.year}</p>

                <h2>{this.props.title}</h2>

                <p className="body-content">{this.props.text}</p>

                <Button />
            </div>
        )
    }
}

class Card extends React.Component {
    render() {
        return (
            <article data-aos="flip-left" data-aos-duration="1200" className="card">
                <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'} title={this.props.title}/>
                <CardBody title={this.props.year} text={this.props.text}/>
            </article>
        )
    }
}

export default Card;