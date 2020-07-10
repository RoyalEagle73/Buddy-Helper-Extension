function getURL(source) {
    // Creating Dictionary to hold categories and week respectively
    topics = {}
    topics['input-output'] = 1
    topics['operators-and-expressions'] = 2
    topics['decision-making'] = 3
    topics['iteration-statements'] = 4
    topics['arrays'] = 5
    topics['back-tracking'] = 6
    topics['bit-manipulation'] = 7
    topics['divide-and-conquer'] = 8
    topics['dynamic-programming'] = 9
    topics['game-theory'] = 10
    topics['graphs'] = 11
    topics['greedy-algo'] = 12
    topics['heaps'] = 13
    topics['queues'] = 14
    topics['recursion'] = 15
    topics['searching'] = 16
    topics['segment-trees'] = 17
    topics['sorting'] = 18
    topics['stacks'] = 19
    topics['strings'] = 20
    topics['trees'] = 22
    topics['tries'] = 21
    topics['linked-list'] = 23
    topics['computational-geometry'] = 24
    topics['gcd-lcm'] = 25
    topics['modular-arithmetic'] = 26
    topics['prime-numbers'] = 27
    topics['permutation-and-combination'] = 28

    // Splitting given URL
    source_list = source.split('/');

    // Extracting topic from URL
    topic = source_list[source_list.length - 3];

    // Extracting week code from URL
    code = source_list[source_list.length - 1];

    // Template URL 
    template = 'https://www.prepbytes.com/panel/mycourses/mentors-coding-program/c++/week/';

    // Combining all parts in template to create final URL
    finalURL = template + topics[topic] + '/' + topic + '/codingAssignment/' + code;
    return finalURL;
}

var menuItem = {
    "id": "BuddyHelper",
    "title": "BuddyHelper",
    "contexts": ["link"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData) {
    if (clickData.menuItemId == "BuddyHelper" && clickData.linkUrl) {
        window.open(getURL(clickData.linkUrl), "_blank ");
    }
});