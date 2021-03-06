const list = [
  {
    day: "Day 1",
    topic: "Arrays and Strings",
    slug: "day-1-arrays-and-strings",
    date: "2022-01-20",
    content: `Let's start with arrays, the staple of any introductory programming course. An array is a collection of items of the same type stored at adjacent memory locations. For example, an array of fruits can contain the values 'Apple' and 'Banana'. Each value in an array can be accessed by its value (first element will usually have the index 0, second element will have the index 1 and so on). Accessing elements in an array is easy (through its index) but insertion and deletion of a value in array is a relatively costly operation.<br/><br/>  An array of characters is called a String. Any textual data you come across is often just a string - in this case, an array of letters. It can consist of alphabets, numbers, spaces and special characters. Strings are often enclosed in double quotation marks. For example, "DSA" is a string. It is an very important datatype and is very widely used.`,
    resources: {
      Blogs: [
        {
          name: "A Comprehensive Guide For Array Data Structure",
          link: "https://medium.com/codeconvention/learn-array-data-structure-2fa01edd21c2",
        },
        {
          name: "String Data Structure",
          link: "https://www.geeksforgeeks.org/string-data-structure/",
        },
      ],
      YouTube: [
        {
          name: "Array",
          link: "https://www.youtube.com/embed/B2KusJcbVIg",
        },
        {
          name: "String",
          link: "https://youtube.com/embed/playlist?list=PLqM7alHXFySE_Pxx_HsUSZGwiLpv9ziWA",
        },
      ],
    },
    problems: [
      {
        name: "Two Sum",
        link: "https://leetcode.com/problems/two-sum/",
      },
      {
        name: "Rotate Array",
        link: "https://leetcode.com/problems/rotate-array/",
      },
      {
        name: "Minimum Size Subarray Sum",
        link: "https://leetcode.com/problems/minimum-size-subarray-sum/",
      },
      {
        name: "Longest Substring Without Repeating Characters",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      },
      {
        name: "Valid Palindrome",
        link: "https://leetcode.com/problems/valid-palindrome/",
      },
    ],
  },
  {
    day: "Day 2",
    topic: "Stacks and Queues",
    slug: "day-2-stacks-and-queues",
    date: "2022-01-21",
    content: `The name 'stack' is probably enough to give you a rough idea of this data structure. It is a linear data structure and follows the LIFO principle. LIFO stands for 'Last In First Out'. In other words, an element that inserted first in the stack will be the last to removed. Picture a stack of books. If we're picking up books from the stack in sequence, the first book that is picked up is the one at the top and the one at the bottom is picked up last. <br/> <br/> Again, the name 'queue' will help you visualise the data structure. This is also a linear data structure following the FIFO principle, i.e., First In First Out. For example, in a queue of people waiting for tickets, the person waiting for the longest will reach the ticket counter and leave the queue first. In a stack we remove the element added most recently; in a queue, we remove the element the added recently. `,
    resources: {
      Blogs: [
        {
          name: "Stack Data Structure",
          link: "https://nstfblogs.netlify.app/blogs/stack",
        },
        {
          name: "When to use Stack Data Structure",
          link: "https://medium.com/javarevisited/when-to-use-stack-data-structure-9ac3dfa4d10",
        },
        {
          name: "Queue | Set-1 (Introduction and Array Implementation)",
          link: "https://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/",
        },
        {
          name: "Queue Data Structure",
          link: "https://nstfblogs.netlify.app/blogs/queue",
        },
      ],
      YouTube: [
        {
          name: "Queues",
          link: "https://www.youtube.com/embed/gnYM_G1ILm0",
        },
        {
          name: "Stack and Queues",
          link: "https://youtube.com/embed/rHQI4mrJ3cg",
        },
      ],
    },
    problems: [
      {
        name: "Valid Parenthesis",
        link: "https://leetcode.com/problems/valid-parentheses/",
      },
      {
        name: "Simplify Path",
        link: "https://leetcode.com/problems/simplify-path/",
      },
      {
        name: "Crawler Log Folder",
        link: "https://leetcode.com/problems/crawler-log-folder/",
      },
      {
        name: "Find the Winner of the Circular Game",
        link: "https://leetcode.com/problems/find-the-winner-of-the-circular-game/",
      },
    ],
  },
  {
    day: "Day 3",
    topic: "Linked Lists",
    slug: "day-3-linked-lists",
    date: "2022-01-22",
    content: `Now we'll look at slightly more advanced type of data structures. A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. This sets it apart from array. Each element is called a node. A node will usually have data and the address of the next node. To put it simply, linked list is a chain of nodes.`,
    resources: {
      Blogs: [
        {
          name: "What???s a Linked List?",
          link: "https://medium.com/basecs/whats-a-linked-list-anyway-part-1-d8b7e6508b9d#:~:text=A%20linked%20list%20is%20made,referred%20to%20as%20the%20head.",
        },
        {
          name: "Linked List Data Structure",
          link: "https://nstfblogs.netlify.app/blogs/linkedLists",
        },
      ],
      YouTube: [
        {
          name: "Linked List",
          link: "https://www.youtube.com/embed/eGnlKPCkAFY",
        },
      ],
    },
    problems: [
      {
        name: "Linked List Cycle",
        link: "https://leetcode.com/problems/linked-list-cycle/",
      },
      {
        name: "Merge Two Sorted Lists",
        link: "https://leetcode.com/problems/merge-two-sorted-lists/",
      },
      {
        name: "Palindrome Linked List",
        link: "https://leetcode.com/problems/palindrome-linked-list/",
      },
      {
        name: "Add Two Numbers",
        link: "https://leetcode.com/problems/add-two-numbers/",
      },
    ],
  },
  {
    day: "Day 4",
    topic: "Trees and Graphs",
    slug: "day-4-trees-and-graphs",
    date: "2022-01-23",
    content: `We've looked at linear data structures so far, let's move on to non-linear ones. A tree is a non-linear data structure which is hierarchical. There are many types of trees and we will look at Binary Tree and Binary Search Tree for now. Fear not, the names may seem intimidating but they are easy to understand data structures. <br/> <br/> This is another non-linear data structure with vertices and edges. Each vertex has a node with data and other reference fields. Vertices are connected by edges. Picture a network of cities connected by roads. Here nodes are cities, roads are edges which connect the cities. Similarly, graphs are used to represent many real-life applications. `,
    resources: {
      Blogs: [
        {
          name: "Understanding Trees in Data Structures",
          link: "https://www.mygreatlearning.com/blog/understanding-trees-in-data-structures/",
        },
        {
          name: "Tree Data Structure",
          link: "https://nstfblogs.netlify.app/blogs/tree",
        },
        {
          name: "Graph Data Structure",
          link: "https://nstfblogs.netlify.app/blogs/graph",
        },
      ],
      YouTube: [
        {
          name: "Tree",
          link: "https://www.youtube.com/embed/vvey2QCs98o",
        },
        {
          name: "Binary Tree",
          link: "https://www.youtube.com/embed/6vt3PFRC11E",
        },
        {
          name: "BST",
          link: "https://www.youtube.com/embed/cySVml6e_Fc",
        },
        {
          name: "Graph",
          link: "https://www.youtube.com/embed/pcKY4hjDrxk",
        },
      ],
    },
    problems: [
      {
        name: "Binary Tree InOrder Traversal",
        link: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
      },
      {
        name: "LCA of Binary Tree",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
      },
      {
        name: "Path Sum",
        link: "https://leetcode.com/problems/path-sum/",
      },
      {
        name: "Number of Islands",
        link: "https://leetcode.com/problems/number-of-islands/",
      },
      {
        name: "Flood Fill",
        link: "https://leetcode.com/problems/flood-fill/",
      },
    ],
  },
  {
    day: "Day 5",
    topic: "Searching and Sorting Algorithms",
    slug: "day-5-searching-and-sorting-algorithms",
    date: "2022-01-24",
    content: `How can you check if an element exists in a given data structure? Searching algorithms are designed for this very purpose. Although the premise may seem straight-forward, getting an efficient search algorithm is not that simple. That is why, we have many searching algorithms which have their own strengths and weaknesses. <br/> <br/>Sorting, in simple terms, can mean arranging elements in ascending or descending order. A sorting algorithm is used to rearrange elements in an array according to the given condition. For example, sorting an integer array based on increasing magnitude. As with searching algorithms, there are many sorting algorithms with varying efficiencies and use cases.`,
    resources: {
      Blogs: [
        {
          name: "Searching in Data Structure ??? Different Search Methods Explained",
          link: "https://www.analyticsvidhya.com/blog/2021/09/searching-in-data-structure-different-search-methods-explained/#:~:text=Searching%20in%20data%20structure%20refers,elements%20in%20the%20computer%20memory.&text=Another%20way%20to%20define%20searching,in%20a%20collection%20of%20items.",
        },
        {
          name: "Sorting Algorithms",
          link: "https://www.geeksforgeeks.org/sorting-algorithms/",
        },
      ],
      YouTube: [
        {
          name: "Searching Algorithms",
          link: "https://www.youtube.com/embed/gBz44smaa9A",
        },
        {
          name: "Sorting Algorithms",
          link: "https://www.youtube.com/embed/zaCwKhMMnFw",
        },
      ],
    },
    problems: [
      {
        name: "First Bad Version",
        link: "https://leetcode.com/problems/first-bad-version/",
      },
      {
        name: "Sorting The Sentence",
        link: "https://leetcode.com/problems/sorting-the-sentence/",
      },
      {
        name: "Find Minimum In Rotated Sorted Array",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
      },
    ],
  },
  {
    day: "Day 6",
    topic: "Recursion and Backtracking",
    slug: "day-6-recursion-and-backtracking",
    date: "2022-01-25",
    content: `Imagine you have a function and you call the same function inside it. That is recursion. This method can provide a surprisingly simple solution to complicated problems. <br/><br/>Some problems are best solved by trying out all possibilities one at a time and eliminating the ones that don't meet our requirements. That is the principle of backtracking. For example, if you want to solve a maze problem, you will try out the possible paths in front of you and eliminate the ones that end in a dead end till you find the solution.`,
    resources: {
      Blogs: [
        {
          name: "Recursion",
          link: "https://www.google.com/amp/s/www.geeksforgeeks.org/recursion/amp/",
        },
        {
          name: "Backtracking Algorithms",
          link: "https://www.baeldung.com/cs/backtracking-algorithms#:~:text=Backtracking%20is%20an%20algorithmic%20technique,satisfy%20them%20will%20be%20removed.",
        },
      ],
      YouTube: [
        {
          name: "Recursion",
          link: "https://www.youtube.com/embed/M2uO2nMT0Bk",
        },
        {
          name: "Backtracking",
          link: "https://www.youtube.com/embed/zg5v2rlV1tM",
        },
      ],
    },
    problems: [
      {
        name: "Reverse String",
        link: "https://leetcode.com/problems/reverse-string/",
      },
      {
        name: "Fibonacci Number",
        link: "https://leetcode.com/problems/fibonacci-number/",
      },
      {
        name: "Binary Watch",
        link: "https://leetcode.com/problems/binary-watch/",
      },
    ],
  },
  {
    day: "Day 7",
    topic: "Dynamic Programming and Greedy Techniques",
    slug: "day-7-dp-and-greedy",
    date: "2022-01-26",
    content: `Let's make recursion more efficient and optimized! With dynamic programming, you can cut down on recursion calls that are repeated by storing the values of recursion calls as they happen and referencing it. This can drastically help us with reducing the time the code will take while executing, which is always a plus.  <br/><br/>Greedy algorithms are very intuitive. For any problem, they chose the next step based on the choice with the most benefit, based on the problem. It chooses the ???locally optimal solution???, without thinking about future consequences.`,
    resources: {
      Blogs: [
        {
          name: "Introduction to Dynamic Programming",
          link: "https://nstfblogs.netlify.app/blogs/dynamicProgramming",
        },
        {
          name: "Greedy Algorithms",
          link: "https://brilliant.org/wiki/greedy-algorithm/#:~:text=A%20greedy%20algorithm%20is%20a,to%20solve%20the%20entire%20problem.&text=However%2C%20in%20many%20problems%2C%20a,not%20produce%20an%20optimal%20solution.",
        },
      ],
      YouTube: [
        {
          name: "DP",
          link: "https://www.youtube.com/embed/playlist?list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go",
        },
        {
          name: "Greedy",
          link: "https://www.youtube.com/embed/playlist?list=PLqM7alHXFySESatj68JKWHRVhoJ1BxtLW",
        },
      ],
    },
    problems: [
      {
        name: "Longest Palindrome",
        link: "https://leetcode.com/problems/longest-palindrome/",
      },
      {
        name: "Largest Odd Number In String",
        link: "https://leetcode.com/problems/largest-odd-number-in-string/",
      },
      {
        name: "Pascals Triangle",
        link: "https://leetcode.com/problems/pascals-triangle/",
      },
      {
        name: "Maximum Subarray",
        link: "https://leetcode.com/problems/maximum-subarray/",
      },
      {
        name: "Best time to buy and sell stock",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      },
    ],
  },
];

export default list;
