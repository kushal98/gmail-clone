import React from 'react';

import { IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';

import SidebarOption from './SidebarOption';

import './Sidebar.css'

function Sidebar(props) {
    return (
        <div className="sidebar">
            <Button 
                startIcon={<AddIcon fontSize="large" />} 
                className="sidebar__compose"
            >
                Compose
            </Button>

            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true} />
            <SidebarOption Icon={StarIcon} title="Starred" number={54} />
            <SidebarOption Icon={WatchLaterSharpIcon} title="Snoozed" number={54} />
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={54} />
            <SidebarOption Icon={SendIcon} title="Sent" number={54} />

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>

        </div>

    );
}

export default Sidebar;