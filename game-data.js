// =================================================================================
// GAME DATA FILE
// =================================================================================
// This file contains all the story and character data for the game.
// Edit this file to add new characters, posts, threads, and events.
// =================================================================================

const characters = {
    'Verity': { name: 'Verity', avatar: 'https://placehold.co/80x80/7e22ce/ffffff?text=V', title: 'New Member', bio: 'dedicated to uncovering the truth - one conspiracy at a time!' },
    'Admin': { name: 'Admin', avatar: 'https://placehold.co/80x80/1d4ed8/ffffff?text=A', title: 'Administrator', bio: 'Hi, I run the Computer Talk Forum, any technical issues drop me a PM.' },
    'Emily': { name: 'Emily', avatar: 'https://placehold.co/80x80/d946ef/ffffff?text=E', title: 'Member', bio: 'Just trying to be the best friend I can be!' },
    'FullStack': { name: 'FullStack', avatar: 'https://placehold.co/80x80/f59e0b/ffffff?text=F', title: 'Member', bio: 'Elite hacker.' },
    'AsAboveSoBelow': { name: 'AsAboveSoBelow', avatar: 'https://placehold.co/80x80/be123c/ffffff?text=AASB', title: 'Member', bio: 'Nothing interesting to see here.' },
};

// This object contains ALL threads that can appear in the game.
// They are added to the active game via scheduledEvents.
const allThreads = {
    'thread_001': { id: 'thread_001', title: 'Introduce Yourself', author: 'Admin' },
    'thread_002': { id: 'thread_002', title: 'The gateway is open, act now before it\'s too late', author: 'AsAboveSoBelow' },
    'thread_003': { id: 'thread_003', title: 'Nothing To See Here', author: 'AsAboveSoBelow' }
};

// This object contains ALL posts, organized by their thread ID.
const allPosts = {
    'thread_001': [
        { id: 'admin_post_01', author: 'Admin', content: 'Computer Talk is for everyone to have a good time talking about technology. Play nicely please.', timestamp: new Date('2025-04-01T03:00:00') },
        { id: 'fullstack_post_01', author: 'FullStack', content: "This forum seems laggy. I don't think you've got the code set up right.", timestamp: new Date('2025-04-01T04:00:00') }
    ],
    'thread_002': [
        { id: 'asabove_post_01', author: 'AsAboveSoBelow', content: "I've managed to open a doorway through. IYKYK. Its time, go go go.", timestamp: new Date('2025-04-01T06:00:00') }
    ],
    'thread_003': [
        { id: 'asabove_post_02', author: 'AsAboveSoBelow', content: "Sorry everyone, ignore that last post. I skipped my medication for the last few days and not feeling so good. Sorry.", timestamp: new Date('2025-04-01T06:00:00') }
    ]
};

// Events that happen automatically at a specific turn.
const scheduledEvents = [
    { turn: 0, type: 'newThread', data: { threadId: 'thread_001' } }, // Makes the first thread appear at the start
    { turn: 1, type: 'newMessage', data: { id: 'emily_pm_01', from: 'Emily', to: 'Verity', subject: 'Hey!', content: "Hi Verity! So cool you signed up here too! I told you there's something weird about this forum, right? Let's see if we can work out what it is together.", unread: true } },
    { turn: 3, type: 'newThread', data: { threadId: 'thread_002' } }, // Turn 3 (6AM)
    { turn: 3, type: 'newThread', data: { threadId: 'thread_003' } }, // Turn 3 (6AM)
    { turn: 4, type: 'disappearThread', data: { threadId: 'thread_002' } }, // Turn 4 (7AM)
    { turn: 4, type: 'disappearThread', data: { threadId: 'thread_003' } }  // Turn 4 (7AM)
];

// Events that are triggered by player actions.
// The key (e.g., 'reply_thread_001_before_5') defines the trigger condition.
const triggeredEvents = {
    'reply_thread_001_before_5': {
        type: 'newPost',
        data: { threadId: 'thread_001', author: 'Admin', content: 'Nice to have you here Verity, hopefully you will find something you want to talk about!' },
        delay: 1, // How many turns after the trigger to wait
        once: true // If true, this trigger can only fire once
    },
    'pm_AsAboveSoBelow_before_10': {
        type: 'newMessage',
        data: { id: 'asabove_pm_01', from: 'AsAboveSoBelow', to: 'Verity', subject: 'RE: Your Message', content: "Are you new here? Take my advice and log out. There's something wrong with this forum and I don't mean the sketchy back end." },
        delay: 1,
        once: true
    },
    'pm_Admin_before_5': {
        type: 'newMessage',
        data: { from: 'Admin', to: 'Verity', subject: 'RE: Your Message', content: "Hi Verity, thanks for messaging me. I have a bit of a backlog of messages to work through right now, but I'll get back to you when I can!" },
        delay: 1,
        once: true
    },
    'receive_asabove_pm_01': {
        type: 'newMessage',
        data: { from: 'Admin', to: 'Verity', subject: 'A friendly warning', content: "Hi there. Just wanted to let you know that we noticed from the logs you've been corresponding with the user going by the name of As Above. Word of caution, he's a nut case. Just warning you that you should take anything he says with a big pinch of salt. Hope you're enjoying the forum!" },
        delay: 1,
        once: true
    }
};

const windowImages = {
    normal: {
        0: 'https://placehold.co/200x150/000033/FFFFFF?text=12AM+Normal', 1: 'https://placehold.co/200x150/000033/FFFFFF?text=1AM+Normal', 2: 'https://placehold.co/200x150/000033/FFFFFF?text=2AM+Normal',
        3: 'https://github.com/Dolligan/ForumHorror/blob/main/Images/3am.png?raw=true',
        4: 'https://github.com/Dolligan/ForumHorror/blob/main/Images/4am.png?raw=true',
        5: 'https://placehold.co/200x150/ff9966/FFFFFF?text=5AM+Normal',
        6: 'https://placehold.co/200x150/87CEEB/000000?text=6AM+Normal', 7: 'https://placehold.co/200x150/87CEFA/000000?text=7AM+Normal', 8: 'https://placehold.co/200x150/87CEFA/000000?text=8AM+Normal',
        9: 'https://placehold.co/200x150/87CEFA/000000?text=9AM+Normal', 10: 'https://placehold.co/200x150/87CEFA/000000?text=10AM+Normal', 11: 'https://placehold.co/200x150/87CEFA/000000?text=11AM+Normal',
        12: 'https://placehold.co/200x150/87CEFA/000000?text=12PM+Normal', 13: 'https://placehold.co/200x150/87CEFA/000000?text=1PM+Normal', 14: 'https://placehold.co/200x150/87CEFA/000000?text=2PM+Normal',
        15: 'https://placehold.co/200x150/87CEFA/000000?text=3PM+Normal', 16: 'https://placehold.co/200x150/87CEFA/000000?text=4PM+Normal', 17: 'https://placehold.co/200x150/b1daef/000000?text=5PM+Normal',
        18: 'https://placehold.co/200x150/FF7F50/FFFFFF?text=6PM+Normal', 19: 'https://placehold.co/200x150/4682B4/FFFFFF?text=7PM+Normal', 20: 'https://placehold.co/200x150/00008B/FFFFFF?text=8PM+Normal',
        21: 'https://placehold.co/200x150/000033/FFFFFF?text=9PM+Normal', 22: 'https://placehold.co/200x150/000033/FFFFFF?text=10PM+Normal', 23: 'https://placehold.co/200x150/000033/FFFFFF?text=11PM+Normal'
    },
    anomaly: {
        0: 'https://placehold.co/200x150/000033/FF0000?text=12AM+Anomaly', 1: 'https://placehold.co/200x150/000033/FF0000?text=1AM+Anomaly', 2: 'https://placehold.co/200x150/000033/FF0000?text=2AM+Anomaly',
        3: 'https://github.com/Dolligan/ForumHorror/blob/main/Images/3amanom.png?raw=true',
        4: 'https://github.com/Dolligan/ForumHorror/blob/main/Images/4amanom.png?raw=true',
        5: 'https://placehold.co/200x150/ff9966/FF0000?text=5AM+Anomaly',
        6: 'https://placehold.co/200x150/87CEEB/FF0000?text=6AM+Anomaly', 7: 'https://placehold.co/200x150/87CEFA/FF0000?text=7AM+Anomaly', 8: 'https://placehold.co/200x150/87CEFA/FF0000?text=8AM+Anomaly',
        9: 'https://placehold.co/200x150/87CEFA/FF0000?text=9AM+Anomaly', 10: 'https://placehold.co/200x150/87CEFA/FF0000?text=10AM+Anomaly', 11: 'https://placehold.co/200x150/87CEFA/FF0000?text=11AM+Anomaly',
        12: 'https://placehold.co/200x150/87CEFA/FF0000?text=12PM+Anomaly', 13: 'https://placehold.co/200x150/87CEFA/FF0000?text=1PM+Anomaly', 14: 'https://placehold.co/200x150/87CEFA/FF0000?text=2PM+Anomaly',
        15: 'https://placehold.co/200x150/87CEFA/FF0000?text=3PM+Anomaly', 16: 'https://placehold.co/200x150/87CEFA/FF0000?text=4PM+Anomaly', 17: 'https://placehold.co/200x150/b1daef/FF0000?text=5PM+Anomaly',
        18: 'https://placehold.co/200x150/FF7F50/000000?text=6PM+Anomaly', 19: 'https://placehold.co/200x150/4682B4/FF0000?text=7PM+Anomaly', 20: 'https://placehold.co/200x150/00008B/FF0000?text=8PM+Anomaly',
        21: 'https://placehold.co/200x150/000033/FF0000?text=9PM+Anomaly', 22: 'https://placehold.co/200x150/000033/FF0000?text=10PM+Anomaly', 23: 'https://placehold.co/200x150/000033/FF0000?text=11PM+Anomaly'
    }
};
