# Edviron School Payment Dashboard Application

A modern, responsive dashboard for managing school payments and transactions. Built with React, TypeScript, and Tailwind CSS.

## Live Demo
[View Live Demo](https://edviron-school-payment-dashboard-application.vercel.app/)

## Features

- 📊 View all transactions with filtering options
  - Filter by status (Success/Pending/Failed)
  - Filter by date range
- 🏫 View and filter transactions by school
- 🔍 Check transaction status by order ID
- 📱 Fully responsive design with mobile-friendly navigation
- 🌙 Modern UI with hover effects on tables
- ⚡ Built with performance in mind using Vite

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: 
  - Headless UI for accessible components
  - Hero Icons for beautiful icons
- **Routing**: React Router v6
- **State Management**: React Hooks

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Layout.tsx    # Main layout with sidebar
│   └── TransactionTable.tsx
├── pages/            # Page components
│   ├── Dashboard.tsx
│   ├── TransactionsBySchool.tsx
│   └── TransactionStatus.tsx
├── types/            # TypeScript type definitions
├── App.tsx           # Main application component
└── main.tsx         # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/LASHETTY/edviron-school-payment-dashboard-application-assignment.git
cd edviron-school-payment-dashboard-application-assignment
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Features Implementation

### 1. Dashboard Page
- View all transactions in a clean, modern table
- Filter transactions by status
- Filter transactions by date range
- Responsive table with hover effects

### 2. School Transactions Page
- Select school from dropdown
- View school-specific transactions
- Same filtering capabilities as dashboard

### 3. Transaction Status Page
- Check status by entering order ID
- View detailed transaction information
- Clear success/pending/failure states

## Deployment

The application is deployed on Vercel and can be accessed at: [https://edviron-school-payment-dashboard-application.vercel.app/](https://edviron-school-payment-dashboard-application.vercel.app/)

## Future Enhancements

- Add environment variables configuration for API endpoints
- Set up unit tests
- Add error boundaries for better error handling
- Implement proper API integration
- Add loading state animations
- Set up CI/CD configuration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
