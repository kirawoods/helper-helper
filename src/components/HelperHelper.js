import React from "react";
import "./HelperHelper.css";
import { HelpRequestCard } from "./HelpRequestCard";

const helpRequests = [
  {
    location: "San Francisco, CA",
    request: "Need help getting groceries",
    name: "Ada Lovelace",
  },
  {
    location: "San Mateo, CA",
    request: "Childcare on Mondays and Wednesdays",
    name: "Katherine Johson",
  },
  {
    location: "Remote",
    request: "Tax Preparation Services",
    name: "Grace Hopper",
  },
  {
    location: "Oakland, CA",
    request: "House Painting on Exterior Walls",
    name: "Margaret Hamilton",
  },
  {
    location: "Remote",
    request: "Planning birthday party for my 6 year old",
    name: "Pam Hardt-English",
  },
  {
    location: "Belmont, CA",
    request: "Math tutoring for my 10 year old",
    name: "Joan Margaret Winters",
  },
  {
    location: "Remote",
    request: "Online therapy session",
    name: "Emine Yilmaz",
  },
  {
    location: "Redwood City, CA",
    request: "Book Donations for Children's Book Exchange",
    name: "Gwen Bell",
  },
  {
    location: "Remote",
    request: "Grocery store gift card",
    name: "Diane Kelly",
  },
];

export function HelperHelper() {
  return (
    <div className="help-cards-container">
      {helpRequests.map((request) => (
        <HelpRequestCard
          location={request.location}
          request={request.request}
          name={request.name}
        />
      ))}
    </div>
  );
}
