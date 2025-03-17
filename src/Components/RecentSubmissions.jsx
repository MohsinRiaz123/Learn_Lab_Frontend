import React from "react";
import Button from "./Button"; // Importing the Button component

const RecentSubmissions = () => {
  const submissions = [
    { name: "Name1", course: "Data Structures", task: "Final Project", time: "2 hours ago" },
    { name: "Name2", course: "Object-Oriented Programming", task: "Assignment 3", time: "5 hours ago" },
    { name: "Name3", course: "Programming Fundamentals", task: "Final Project", time: "3 hours ago" },
    { name: "Name4", course: "Introduction to Computing", task: "Assignment 2", time: "6 hours ago" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border">
      <h3 className="font-semibold mb-4 text-lg">Recent Submissions</h3>
      {submissions.map((submission, index) => (
        <div key={index} className="flex justify-between items-center border-b pb-3 last:border-0">
          <div>
            <h4 className="font-medium">{submission.name}</h4>
            <span className="text-sm text-gray-600">
              {submission.course} - {submission.task}
            </span>
            <p className="text-xs text-gray-500">{submission.time}</p>
          </div>
          <Button variant="outline">Review</Button>
        </div>
      ))}
    </div>
  );
};

export default RecentSubmissions;
