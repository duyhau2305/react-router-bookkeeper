import React from 'react';
import { useParams } from 'react-router-dom';

// A mock function to simulate fetching data based on an invoice ID
const fetchInvoiceData = (id) => {
  // In a real application, this data would come from a backend service
  const invoiceDatabase = {
    "12": { customerName: "Santa Monica", amountDue: "$8,000", dueDate: "10/31/2000" },
    "2": { customerName: "Hau Nguyen", amountDue: "$5,500", dueDate: "11/15/2000" },
    "3": { customerName: "Tony Nguyen", amountDue: "$3,250", dueDate: "12/01/2000" },
  };
  
  return invoiceDatabase[id] || {};
};

const InvoiceDetail = () => {
  let { id } = useParams(); // This retrieves the `id` from the URL
  let invoiceData = fetchInvoiceData(id);

  return (
    <div style={{ padding: '20px', background: 'white', color: 'black' }}>
      <h2>Total Due: {invoiceData.amountDue}</h2>
      <p>{invoiceData.customerName}</p>
      <p>Due Date: {invoiceData.dueDate}</p>
    </div>
  );
};

export default InvoiceDetail;
