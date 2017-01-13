import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
    marginLeft: '50%',
};

const LoadingIndicator = (props) => {
    return <RefreshIndicator size={40} left={-20} top={80}
                             style={style}
                             status={props.visible ? "loading" : "hide"}
    />;
};
export default  LoadingIndicator;