// ==================== STUDY MATERIAL DATA ====================

const studyTopics = [
    {
        id: 'data-structures',
        title: 'Data Structures',
        icon: '🏗️',
        description: 'Master fundamental building blocks of algorithms',
        shortContent: 'Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Hash Tables',
        content: `
            <h3>Introduction to Data Structures</h3>
            <p>Data structures are specialized formats for organizing, processing, and storing data. They are crucial for writing efficient algorithms and solving complex problems.</p>

            <h3>Common Data Structures</h3>
            <ul>
                <li><strong>Arrays:</strong> Contiguous memory storage for elements of the same type. Fixed size, O(1) access time.</li>
                <li><strong>Linked Lists:</strong> Dynamic data structure with nodes connected via pointers. O(n) access time, efficient insertion/deletion.</li>
                <li><strong>Stacks:</strong> LIFO (Last In First Out) data structure. Used in function calls, expression evaluation, undo operations.</li>
                <li><strong>Queues:</strong> FIFO (First In First Out) data structure. Used in BFS, task scheduling, printer queues.</li>
                <li><strong>Trees:</strong> Hierarchical data structure. Binary Trees, BSTs, AVL Trees, Red-Black Trees.</li>
                <li><strong>Graphs:</strong> Collections of vertices and edges. Used in social networks, route planning, recommendation systems.</li>
                <li><strong>Hash Tables:</strong> Key-value pairs with hash functions. O(1) average lookup time.</li>
            </ul>

            <h3>Complexity Analysis</h3>
            <table>
                <tr>
                    <th>Data Structure</th>
                    <th>Access</th>
                    <th>Search</th>
                    <th>Insert</th>
                    <th>Delete</th>
                </tr>
                <tr>
                    <td>Array</td>
                    <td>O(1)</td>
                    <td>O(n)</td>
                    <td>O(n)</td>
                    <td>O(n)</td>
                </tr>
                <tr>
                    <td>Linked List</td>
                    <td>O(n)</td>
                    <td>O(n)</td>
                    <td>O(1)</td>
                    <td>O(1)</td>
                </tr>
            </table>

            <h3>Key Concepts</h3>
            <p><strong>Time Complexity:</strong> Measure of how the runtime grows with input size.</p>
            <p><strong>Space Complexity:</strong> Measure of how much memory a data structure uses.</p>
            <p><strong>Trade-offs:</strong> Different structures excel at different operations. Choose wisely based on your use case.</p>

            <h3>Practice Problems</h3>
            <ul>
                <li>Implement a Stack using Arrays</li>
                <li>Reverse a Linked List</li>
                <li>Binary Tree Level Order Traversal</li>
                <li>Longest Palindromic Substring (using Hash Table)</li>
            </ul>
        `
    },
    {
        id: 'algorithms',
        title: 'Algorithms',
        icon: '⚙️',
        description: 'Learn fundamental algorithmic approaches and techniques',
        shortContent: 'Sorting, Searching, Divide & Conquer, Dynamic Programming, Greedy',
        content: `
            <h3>What are Algorithms?</h3>
            <p>An algorithm is a step-by-step procedure for solving a problem or accomplishing a task. Algorithms are the heart of computer science.</p>

            <h3>Sorting Algorithms</h3>
            <ul>
                <li><strong>Bubble Sort:</strong> O(n²) time complexity. Simple but inefficient for large datasets.</li>
                <li><strong>Quick Sort:</strong> O(n log n) average, O(n²) worst. Divide and conquer approach.</li>
                <li><strong>Merge Sort:</strong> O(n log n) guaranteed. Stable sorting algorithm.</li>
                <li><strong>Heap Sort:</strong> O(n log n) time complexity. In-place sorting.</li>
            </ul>

            <h3>Searching Algorithms</h3>
            <ul>
                <li><strong>Linear Search:</strong> O(n) time complexity. Works on unsorted arrays.</li>
                <li><strong>Binary Search:</strong> O(log n) time complexity. Requires sorted array.</li>
                <li><strong>Depth-First Search (DFS):</strong> Explores graph depth-wise.</li>
                <li><strong>Breadth-First Search (BFS):</strong> Explores graph level-wise.</li>
            </ul>

            <h3>Algorithmic Paradigms</h3>
            <p><strong>Divide and Conquer:</strong> Break problem into subproblems, solve independently, combine results. Examples: Merge Sort, Quick Sort.</p>
            <p><strong>Dynamic Programming:</strong> Solve overlapping subproblems by storing results. Examples: Fibonacci, Longest Common Subsequence.</p>
            <p><strong>Greedy Algorithms:</strong> Make locally optimal choices hoping to find global optimum. Examples: Activity Selection, Huffman Coding.</p>

            <h3>Code Example: Binary Search</h3>
            <pre><code>function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    
    while (left &lt;= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) return mid;
        else if (arr[mid] &lt; target) left = mid + 1;
        else right = mid - 1;
    }
    
    return -1; // Not found
}</code></pre>

            <h3>Practice Problems</h3>
            <ul>
                <li>Implement Merge Sort</li>
                <li>Find k-th Largest Element</li>
                <li>Word Ladder (BFS)</li>
                <li>Coin Change (Dynamic Programming)</li>
            </ul>
        `
    },
    {
        id: 'oop',
        title: 'Object-Oriented Programming',
        icon: '🎯',
        description: 'Master OOP principles and design patterns',
        shortContent: 'Classes, Inheritance, Polymorphism, Encapsulation, SOLID Principles',
        content: `
            <h3>Core OOP Principles</h3>
            <p>Object-Oriented Programming is a paradigm that organizes code around objects and classes.</p>

            <h3>The Four Pillars of OOP</h3>
            <ul>
                <li><strong>Encapsulation:</strong> Bundling data and methods within a class. Use access modifiers (private, public, protected) to control visibility.</li>
                <li><strong>Abstraction:</strong> Hiding complex implementation details. Show only essential features to the user.</li>
                <li><strong>Inheritance:</strong> Creating new classes based on existing ones. Promotes code reuse and establishes relationships.</li>
                <li><strong>Polymorphism:</strong> Objects of different types can be used interchangeably. Method overriding and interfaces enable this.</li>
            </ul>

            <h3>SOLID Principles</h3>
            <ul>
                <li><strong>S - Single Responsibility:</strong> A class should have only one reason to change.</li>
                <li><strong>O - Open/Closed:</strong> Open for extension, closed for modification.</li>
                <li><strong>L - Liskov Substitution:</strong> Derived classes should be substitutable for their base classes.</li>
                <li><strong>I - Interface Segregation:</strong> Clients should not depend on interfaces they don't use.</li>
                <li><strong>D - Dependency Inversion:</strong> Depend on abstractions, not concrete implementations.</li>
            </ul>

            <h3>Code Example: Class and Inheritance</h3>
            <pre><code>class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(\`\${this.name} makes a sound\`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(\`\${this.name} barks!\`);
    }
}</code></pre>

            <h3>Design Patterns</h3>
            <ul>
                <li><strong>Creational:</strong> Singleton, Factory, Builder, Prototype</li>
                <li><strong>Structural:</strong> Adapter, Decorator, Facade, Proxy</li>
                <li><strong>Behavioral:</strong> Observer, Strategy, State, Template Method</li>
            </ul>

            <h3>Best Practices</h3>
            <ul>
                <li>Keep classes focused and single-responsibility</li>
                <li>Use composition over inheritance when appropriate</li>
                <li>Program to interfaces, not implementations</li>
                <li>Avoid deep inheritance hierarchies</li>
            </ul>
        `
    },
    {
        id: 'web-dev',
        title: 'Web Development',
        icon: '🌐',
        description: 'Build modern web applications from scratch',
        shortContent: 'HTML/CSS/JS, Frontend Frameworks, Backend, Databases, APIs',
        content: `
            <h3>Web Development Stack</h3>
            <p>Modern web development involves multiple layers working together to create dynamic, responsive applications.</p>

            <h3>Frontend Development</h3>
            <ul>
                <li><strong>HTML:</strong> Structure and semantic markup. Defines the content of web pages.</li>
                <li><strong>CSS:</strong> Styling and layout. Create beautiful, responsive designs.</li>
                <li><strong>JavaScript:</strong> Interactivity and dynamic behavior. Browser manipulation and DOM management.</li>
                <li><strong>Frameworks:</strong> React, Vue, Angular. Build scalable, maintainable applications.</li>
            </ul>

            <h3>Backend Development</h3>
            <ul>
                <li><strong>Server-side Languages:</strong> Node.js, Python, Java, C#, Go</li>
                <li><strong>Web Frameworks:</strong> Express, Django, Spring, ASP.NET</li>
                <li><strong>APIs:</strong> RESTful APIs, GraphQL. Communicate between frontend and backend.</li>
                <li><strong>Authentication:</strong> JWT, OAuth, Session-based authentication</li>
            </ul>

            <h3>Databases</h3>
            <ul>
                <li><strong>Relational (SQL):</strong> PostgreSQL, MySQL, SQL Server. Structured data with relationships.</li>
                <li><strong>NoSQL:</strong> MongoDB, Firebase, DynamoDB. Flexible, scalable document storage.</li>
                <li><strong>Caching:</strong> Redis, Memcached. Improve performance with in-memory data stores.</li>
            </ul>

            <h3>HTTP Basics</h3>
            <p><strong>Methods:</strong> GET (retrieve), POST (create), PUT (update), DELETE (remove), PATCH (partial update)</p>
            <p><strong>Status Codes:</strong> 2xx (success), 3xx (redirect), 4xx (client error), 5xx (server error)</p>

            <h3>Code Example: REST API</h3>
            <pre><code>// GET request to fetch data
fetch('https://api.example.com/users/1')
    .then(response => response.json())
    .then(data => console.log(data));

// POST request to create data
fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name: 'John', age: 30})
})</code></pre>

            <h3>Best Practices</h3>
            <ul>
                <li>Implement proper error handling and validation</li>
                <li>Use HTTPS for secure communication</li>
                <li>Optimize performance with caching and CDNs</li>
                <li>Write tests for critical functionality</li>
            </ul>
        `
    },
    {
        id: 'database-design',
        title: 'Database Design',
        icon: '🗄️',
        description: 'Design efficient and scalable databases',
        shortContent: 'Normalization, Indexing, Query Optimization, Transactions, Scaling',
        content: `
            <h3>Database Design Fundamentals</h3>
            <p>Proper database design is essential for creating efficient, maintainable, and scalable applications.</p>

            <h3>Normalization</h3>
            <ul>
                <li><strong>First Normal Form (1NF):</strong> All columns should contain atomic (indivisible) values.</li>
                <li><strong>Second Normal Form (2NF):</strong> Must be in 1NF and all non-key attributes must be dependent on the primary key.</li>
                <li><strong>Third Normal Form (3NF):</strong> Must be in 2NF and have no transitive dependencies.</li>
            </ul>

            <h3>Indexing</h3>
            <p>Indexes improve query performance by allowing faster data retrieval. Common index types:</p>
            <ul>
                <li><strong>Primary Index:</strong> Unique identifier for each row</li>
                <li><strong>Foreign Key Index:</strong> Links to other tables</li>
                <li><strong>Composite Index:</strong> Index on multiple columns</li>
                <li><strong>Full-text Index:</strong> For text search</li>
            </ul>

            <h3>Query Optimization</h3>
            <ul>
                <li>Use EXPLAIN/EXPLAIN PLAN to analyze queries</li>
                <li>Create indexes on frequently searched columns</li>
                <li>Avoid SELECT * in production code</li>
                <li>Use proper JOIN types (INNER, LEFT, RIGHT)</li>
                <li>Minimize N+1 query problems</li>
            </ul>

            <h3>SQL Example: Optimized Query</h3>
            <pre><code>-- Optimized: Use specific columns and proper indexing
SELECT users.id, users.name, COUNT(orders.id) as order_count
FROM users
LEFT JOIN orders ON users.id = orders.user_id
WHERE users.created_at &gt; NOW() - INTERVAL '30 days'
GROUP BY users.id
ORDER BY order_count DESC;</code></pre>

            <h3>Transactions and ACID Properties</h3>
            <ul>
                <li><strong>Atomicity:</strong> All or nothing - transaction completes fully or not at all</li>
                <li><strong>Consistency:</strong> Database moves from one valid state to another</li>
                <li><strong>Isolation:</strong> Concurrent transactions don't interfere with each other</li>
                <li><strong>Durability:</strong> Committed data persists even after failures</li>
            </ul>

            <h3>Scaling Databases</h3>
            <ul>
                <li><strong>Vertical Scaling:</strong> Add more resources to a single server</li>
                <li><strong>Horizontal Scaling:</strong> Distribute data across multiple servers (sharding)</li>
                <li><strong>Replication:</strong> Create copies for redundancy and load distribution</li>
                <li><strong>Caching:</strong> Store frequently accessed data in memory</li>
            </ul>
        `
    },
    {
        id: 'system-design',
        title: 'System Design',
        icon: '🏗️',
        description: 'Design large-scale distributed systems',
        shortContent: 'Scalability, Load Balancing, Caching, Microservices, Cloud Architecture',
        content: `
            <h3>System Design Principles</h3>
            <p>System design deals with the architecture and structure of large-scale applications that serve millions of users.</p>

            <h3>Key Concepts</h3>
            <ul>
                <li><strong>Scalability:</strong> Ability to handle increased load without degrading performance</li>
                <li><strong>Availability:</strong> System uptime and reliability</li>
                <li><strong>Consistency:</strong> All nodes have the same data at the same time</li>
                <li><strong>Partition Tolerance:</strong> System continues despite network failures</li>
            </ul>

            <h3>CAP Theorem</h3>
            <p>A distributed system can have at most 2 of these 3 properties:</p>
            <ul>
                <li><strong>Consistency:</strong> Every read receives the most recent write</li>
                <li><strong>Availability:</strong> Every request gets a response</li>
                <li><strong>Partition Tolerance:</strong> System continues despite network failures</li>
            </ul>

            <h3>Load Balancing</h3>
            <p>Distribute incoming requests across multiple servers:</p>
            <ul>
                <li><strong>Round Robin:</strong> Requests distributed equally</li>
                <li><strong>Least Connections:</strong> Route to server with fewest active connections</li>
                <li><strong>IP Hash:</strong> Route based on client IP address</li>
                <li><strong>Weighted Round Robin:</strong> Distribute based on server capacity</li>
            </ul>

            <h3>Caching Strategies</h3>
            <ul>
                <li><strong>Cache-Aside:</strong> Application manages cache</li>
                <li><strong>Write-Through:</strong> Write to cache and database simultaneously</li>
                <li><strong>Write-Behind:</strong> Write to cache first, then database asynchronously</li>
                <li><strong>Refresh-Ahead:</strong> Proactively refresh cache before expiration</li>
            </ul>

            <h3>Microservices Architecture</h3>
            <pre><code>// Instead of monolithic:
// One large application handling all functionality

// Use microservices:
// User Service - handles user management
// Product Service - handles product catalog
// Order Service - handles order processing
// Payment Service - handles payments
// Communication: REST APIs or Message Queues</code></pre>

            <h3>System Design Patterns</h3>
            <ul>
                <li><strong>Sharding:</strong> Partition data across multiple databases</li>
                <li><strong>Replication:</strong> Duplicate data for redundancy</li>
                <li><strong>Event-Driven Architecture:</strong> Asynchronous communication via events</li>
                <li><strong>API Gateway:</strong> Single entry point for all client requests</li>
            </ul>

            <h3>Monitoring and Logging</h3>
            <ul>
                <li>Implement comprehensive logging at all layers</li>
                <li>Monitor key metrics: latency, throughput, error rates</li>
                <li>Set up alerts for anomalies</li>
                <li>Use distributed tracing for microservices</li>
            </ul>
        `
    },
    {
        id: 'networking',
        title: 'Computer Networks',
        icon: '🌍',
        description: 'Understand how computers communicate',
        shortContent: 'OSI Model, TCP/IP, DNS, HTTP/HTTPS, Network Protocols',
        content: `
            <h3>Networking Fundamentals</h3>
            <p>Computer networks are the foundation of modern communication and internet connectivity.</p>

            <h3>OSI Model (7 Layers)</h3>
            <ol>
                <li><strong>Physical:</strong> Physical transmission of bits over cables/wireless</li>
                <li><strong>Data Link:</strong> Frame delivery via MAC addresses (switches)</li>
                <li><strong>Network:</strong> IP routing and logical addressing (routers)</li>
                <li><strong>Transport:</strong> TCP/UDP - reliable/unreliable data delivery</li>
                <li><strong>Session:</strong> Managing communication sessions</li>
                <li><strong>Presentation:</strong> Data encryption and compression</li>
                <li><strong>Application:</strong> User applications (HTTP, FTP, DNS, SMTP)</li>
            </ol>

            <h3>TCP vs UDP</h3>
            <ul>
                <li><strong>TCP (Transmission Control Protocol):</strong> Reliable, ordered delivery. Used for: HTTP, SMTP, FTP, SSH</li>
                <li><strong>UDP (User Datagram Protocol):</strong> Fast, connectionless. Used for: DNS, Video Streaming, Online Gaming</li>
            </ul>

            <h3>DNS (Domain Name System)</h3>
            <p>Converts domain names to IP addresses. Process:</p>
            <ul>
                <li>User enters URL in browser</li>
                <li>Browser queries recursive resolver</li>
                <li>Resolver queries root nameserver</li>
                <li>Root refers to TLD nameserver</li>
                <li>TLD refers to authoritative nameserver</li>
                <li>Authoritative nameserver returns IP address</li>
            </ul>

            <h3>HTTP/HTTPS</h3>
            <p><strong>HTTP:</strong> Hypertext Transfer Protocol. Stateless, request-response protocol.</p>
            <p><strong>HTTPS:</strong> HTTP over SSL/TLS. Encrypted communication with SSL certificates.</p>

            <h3>HTTP Request Example</h3>
            <pre><code>GET /api/users/1 HTTP/1.1
Host: api.example.com
User-Agent: Mozilla/5.0
Accept: application/json
Authorization: Bearer token123

// Response:
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 256


{"id": 1, "name": "John", "email": "john@example.com"}</code></pre>

            <h3>Network Security</h3>
            <ul>
                <li><strong>Firewalls:</strong> Control incoming and outgoing traffic</li>
                <li><strong>VPN:</strong> Virtual Private Network for secure remote access</li>
                <li><strong>Encryption:</strong> Convert data to unreadable format</li>
                <li><strong>SSL/TLS:</strong> Secure Sockets Layer/Transport Layer Security</li>
            </ul>

            <h3>Key Concepts</h3>
            <ul>
                <li><strong>IP Address:</strong> Unique identifier for devices (IPv4: 192.168.1.1, IPv6: 2001:db8::1)</li>
                <li><strong>Port:</strong> Endpoint for network communication (0-65535)</li>
                <li><strong>Socket:</strong> Combination of IP address and port</li>
                <li><strong>Bandwidth:</strong> Maximum data transfer rate</li>
                <li><strong>Latency:</strong> Delay in data transmission</li>
            </ul>
        `
    }
];
{
    id: 'graphql',
    title: 'GraphQL',
    icon: '🚀',
    description: 'Learn modern API query language',
    shortContent: 'Queries, Mutations, Schemas, Resolvers, Apollo',
    content: `
        <h3>Introduction to GraphQL</h3>
        <p>GraphQL is a query language for APIs developed by Meta.</p>

        <h3>Core Concepts</h3>
        <ul>
            <li><strong>Query:</strong> Fetch data</li>
            <li><strong>Mutation:</strong> Modify data</li>
            <li><strong>Schema:</strong> Defines API structure</li>
            <li><strong>Resolver:</strong> Handles data fetching</li>
        </ul>

        <h3>Example Query</h3>
        <pre><code>
query {
  user(id: 1) {
    name
    email
  }
}
        </code></pre>

        <h3>Learning Objectives</h3>
        <ul>
            <li>Understand GraphQL architecture</li>
            <li>Write queries and mutations</li>
            <li>Build GraphQL APIs</li>
        </ul>

        <h3>Practice Problems</h3>
        <ul>
            <li>Create a user query</li>
            <li>Build a mutation for registration</li>
            <li>Create nested queries</li>
        </ul>
    `
}
// ==================== EXPORT ====================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { studyTopics };
}
