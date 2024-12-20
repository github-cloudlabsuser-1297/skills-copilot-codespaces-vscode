import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <textarea
                value={markdown}
                onChange={handleChange}
                style={{ width: '50%', height: '200px', marginBottom: '20px' }}
            />
            <div style={{ width: '50%', border: '1px solid #ddd', padding: '10px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
    
    function reverseSentence(sentence) {
        return sentence
            .split(' ')
            .reverse()
            .join(' ')
            .replace(/^\w/, (c) => c.toUpperCase());
    }

    // Example usage:
    const inputSentence = "hello world from copilot";
    const reversedSentence = reverseSentence(inputSentence);
    console.log(reversedSentence); // Output: "Copilot from world hello"

    const data = [
        [
          { name: 'John', age: 25 },
          { name: 'Jane', age: 30 }
        ],
        [
          { name: 'Bob', age: 40 }
        ]
      ];

    const names = data.flat().map(person => person.name);
    console.log(names); // Output: ["John", "Jane", "Bob"]


    const extractedNames = data.flatMap(innerArray => innerArray.map(person => person.name));
    console.log(extractedNames); // Output: ["John", "Jane", "Bob"]
