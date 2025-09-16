# ProfitPeers Trading Site

A modern Next.js trading platform website built with Tailwind CSS and shadcn/ui components.

## 🚨 IMPORTANT: Text Visibility Guidelines

### Critical Issue: White Text on Light Backgrounds
**ALWAYS** check text visibility when making changes. This project previously had critical issues with white text appearing on white/light backgrounds, making content completely unreadable.

### Text Visibility Checklist
Before deploying any changes, verify:

- [ ] All text has sufficient contrast against its background
- [ ] No white text on white/light backgrounds
- [ ] Stats numbers and labels are clearly visible
- [ ] CTA sections have readable text
- [ ] Button text maintains proper contrast
- [ ] Gradient backgrounds don't wash out text

### Color Guidelines
- **Dark backgrounds** (`blue-700`, `blue-800`, `gray-800`): Use `text-white` or `text-blue-50`
- **Light backgrounds** (`white`, `gray-50`, `blue-50`): Use `text-gray-900`, `text-black`, or `text-blue-900`
- **Gradient backgrounds**: Test text visibility across the entire gradient

### Recently Fixed Issues
- Stats section: "150+ Active Traders", "95% Success Rate", "24/7 Market Coverage"
- CTA sections: "Ready to Transform Your Trading?"
- Pricing badges: "Best Value" labels
- Primary color issues: Replaced undefined `primary-*` classes with `blue-*` classes

## Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Lint
```bash
npm run lint
```

## Tech Stack
- **Framework**: Next.js 14
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## Project Structure
```
src/
├── app/                 # Next.js app directory
│   ├── page.tsx        # Homepage
│   ├── pricing/        # Pricing page
│   ├── about/          # About page
│   └── layout.tsx      # Root layout
├── components/         # Reusable components
│   └── ui/            # shadcn/ui components
└── lib/               # Utilities
```

## Design System

### Colors
- **Primary**: Blue palette (`blue-50` to `blue-900`)
- **Neutral**: Gray palette (`gray-50` to `gray-900`)
- **Accent**: White and black for contrast

### Typography
- **Headings**: Bold weights with proper contrast
- **Body**: Medium weights for readability
- **CTAs**: High contrast with backgrounds

## Deployment Notes

### Before Each Deployment
1. Run `npm run build` to check for build errors
2. Test all pages for text visibility issues
3. Verify responsive design on mobile/desktop
4. Check all interactive elements (buttons, forms)

### Common Issues to Avoid
- Using undefined color classes (like `primary-*` without configuration)
- White text on light backgrounds
- Poor contrast ratios
- Missing hover states

## Contributing

When making changes:
1. Always test text visibility
2. Follow existing color patterns
3. Use semantic HTML
4. Maintain accessibility standards
5. Test on multiple screen sizes

## Support

For issues related to text visibility or design inconsistencies, check this README first and ensure all guidelines are followed.