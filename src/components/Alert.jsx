import React from 'react'


export default function Alert(props) {
    const capitalize = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+ lower.slice(1);    
    }
  return (
    // layout sift na ho esliye hum alert ko div me set karke height fix kar denge 
    <div style={{height: '50px'}} >
      { props.alert && <div>
            {/* this syntax is ussed to check if alert is null then it will not display on the screen  */}
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)} : </strong> {props.alert.msg}.
            </div>
        </div>}
    </div>
  )
}
