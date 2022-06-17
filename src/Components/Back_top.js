import React, { Component } from 'react';

import { animateScroll as scroll } from 'react-scroll';


class Scrolltotop extends Component {

    ScrollTo() {
        scroll.scrollToTop();
    }

    render() {

        return (
            <div className="move-top-wrap">
                <div onClick={this.ScrollTo} className="move-top" style={{ cursor: 'pointer' }}> Top ↑</div>
            </div>
        );

    }

}
export default Scrolltotop;