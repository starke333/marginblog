import React from 'react';
import Ismember from './Ismember';
import Notmember from './Notmember';
import Memberunkown from './Memberunknown';

const = (props) => {s
    return (
            <div>
                const isMember= props.margins.members

                if(isMember === 1){
                    <Ismember />
                }
                else if(isMember === 0){
                    <Notmember />
                }
                else{
                    <Memberunkown />
            }

            </div>
    )
}

export default displaymember;