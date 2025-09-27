# Design Guidelines: Dementia Detection Healthcare Platform

## Design Approach
**Reference-Based Approach**: Drawing inspiration from leading healthcare platforms like **Headspace Health**, **Teladoc**, and **23andMe** for their trust-building design patterns, clinical data visualization, and user-centered health interfaces.

## Core Design Principles
- **Trust & Clinical Authority**: Professional medical aesthetic with scientific credibility
- **Accessibility First**: High contrast ratios, clear typography, intuitive navigation
- **Data Clarity**: Clean, understandable visualizations for complex health metrics
- **Emotional Comfort**: Calming design that reduces anxiety around health assessments

## Color Palette

### Light Mode
- **Primary**: 203 80% 45% (Medical blue - trust and reliability)
- **Secondary**: 183 65% 55% (Soft teal - calming healthcare accent)
- **Background**: 210 20% 98% (Warm clinical white)
- **Surface**: 210 15% 95% (Subtle gray for cards/panels)
- **Text Primary**: 210 25% 15% (Deep blue-gray for readability)
- **Success**: 142 70% 45% (Reassuring green for positive indicators)
- **Warning**: 35 85% 55% (Gentle orange for caution)
- **Critical**: 0 70% 55% (Muted red for serious alerts)

### Dark Mode
- **Primary**: 203 75% 65% (Lighter medical blue)
- **Secondary**: 183 55% 65% (Softer teal)
- **Background**: 210 25% 8% (Deep clinical dark)
- **Surface**: 210 20% 12% (Elevated dark surfaces)
- **Text Primary**: 210 15% 85% (Light blue-gray for comfort)

## Typography
- **Primary Font**: Inter (Google Fonts) - clinical clarity and excellent readability
- **Secondary Font**: Source Serif Pro (Google Fonts) - for testimonials and human touches
- **Hierarchy**: Large headings (2.5rem), body text (1rem), small text (0.875rem)

## Layout System
**Tailwind Spacing Units**: Consistent use of 2, 4, 6, 8, 12, 16 for harmonious spacing across components.

## Component Library

### Landing Page Components
- **Hero Section**: Large centered layout with trust-building headline, subtext, and primary CTA
- **Features Grid**: 3-column layout (mobile: 1-column) with icons, titles, and descriptions
- **How It Works**: Horizontal 3-step flow with numbered indicators
- **Trust Indicators**: Logos, certifications, security badges in subtle gray tones

### Dashboard Components
- **Risk Score Gauge**: Large circular progress indicator with color-coded risk levels
- **Time Series Chart**: Clean line chart with subtle grid, tooltip interactions
- **Contribution Charts**: Pie chart and horizontal bar charts with healthcare-appropriate colors
- **Score Cards**: Clean rectangular cards with large numbers and context labels
- **History Table**: Striped rows, clear headers, sortable columns

### Navigation & Forms
- **Top Navigation**: Clean horizontal bar with logo left, user menu right
- **Sidebar**: Collapsible navigation for dashboard sections
- **Forms**: Rounded input fields with clear labels, validation states

## Animations
**Minimal & Purposeful**: Subtle fade-ins for data loading, gentle hover states, smooth page transitions (300ms ease-out). No distracting animations that could cause anxiety.

## Visual Treatments
- **Gradients**: Subtle linear gradients on hero backgrounds (primary to secondary, 15% opacity)
- **Shadows**: Soft box shadows for depth (rgba(0,0,0,0.05))
- **Border Radius**: Consistent 8px for cards, 4px for buttons, 6px for inputs

## Images
### Hero Section
- **Large Hero Image**: Abstract brain/neural network illustration or photograph of diverse adults in consultation setting
- **Placement**: Right side of hero on desktop, background overlay on mobile
- **Treatment**: Soft overlay with 60% opacity in brand colors

### Supporting Images
- **Feature Icons**: Simple line icons representing AI, brain health, and data analysis
- **Trust Signals**: Professional headshots for testimonials, certification badges
- **Dashboard Illustrations**: Subtle medical/health iconography for empty states

This design system prioritizes user trust and data clarity while maintaining the warmth and approachability essential for healthcare applications.