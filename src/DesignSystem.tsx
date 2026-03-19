import { Button } from './components/Button';
import { Input } from './components/Input';

function DesignSystem() {
  const colors = [
    { name: 'Primary', hex: '#595bff', var: 'var(--primary)' },
    { name: 'Primary 50', hex: '#acadff', var: 'var(--primary-50)' },
    { name: 'Primary 25', hex: '#d5d6ff', var: 'var(--primary-25)' },
    { name: 'Primary 10', hex: '#f0f0ff', var: 'var(--primary-10)' },
    { name: 'Black', hex: '#131313', var: 'var(--black)' },
    { name: 'Black 75', hex: '#666d73', var: 'var(--black-75)' },
    { name: 'Black 50', hex: '#898989', var: 'var(--black-50)' },
    { name: 'Black 25', hex: '#cbcdce', var: 'var(--black-25)' },
    { name: 'Grey', hex: '#d9d9d9', var: 'var(--grey)' },
    { name: 'Grey 3', hex: '#f5f5f5', var: 'var(--grey-3)' },
    { name: 'Success', hex: '#00a507', var: 'var(--green)' },
    { name: 'Warning', hex: '#d97706', var: 'var(--orange)' },
    { name: 'Error', hex: '#ff2626', var: 'var(--red)' },
  ];

  const typography = [
    { name: 'Heading 1', class: 'h1', size: '28px', weight: '700' },
    { name: 'Heading 2', class: 'h2', size: '26px', weight: '700' },
    { name: 'Heading 4', class: 'h4', size: '20px', weight: '500' },
    { name: 'Body 1 (Regular)', class: 'body-1', size: '16px', weight: '400' },
    { name: 'Body 2 (Medium)', class: 'body-2 font-medium', size: '14px', weight: '500' },
    { name: 'Body 3 (Small)', class: 'body-3', size: '12px', weight: '400' },
    { name: 'Label 4', class: 'label-4', size: '12px', weight: '500' },
    { name: 'Tiny', class: 'tiny', size: '10px', weight: '400' },
  ];

  return (
    <div className="min-h-screen bg-(--bg-page) text-(--black) py-12 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Header */}
        <header className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-(--primary) flex items-center justify-center shadow-md shadow-primary-25/50">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Complynexus <span className="text-(--black-50)">/ Design System</span></h1>
          </div>
          <p className="text-(--black-50) text-lg max-w-2xl">
            A comprehensive guide to the visual identity, components, and interaction patterns used across the Academy platform.
          </p>
        </header>

        {/* Colors Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">Color Palette</h2>
            <div className="h-px flex-1 bg-(--black-25) opacity-20"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {colors.map((color) => (
              <div key={color.name} className="space-y-3 group cursor-pointer">
                <div 
                  className="h-24 w-full rounded-2xl shadow-sm border border-(--black-25)/10 transition-transform group-hover:-translate-y-1"
                  style={{ backgroundColor: color.hex }}
                ></div>
                <div className="space-y-1">
                  <p className="font-semibold text-sm">{color.name}</p>
                  <p className="text-xs text-(--black-50) font-mono uppercase tracking-wider">{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section className="space-y-8 text-white-75">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">Typography</h2>
            <div className="h-px flex-1 bg-(--black-25) opacity-20"></div>
          </div>
          <div className="card space-y-0 p-0 overflow-hidden shadow-none border-(--black-25)/20">
            <table className="w-full text-left border-collapse">
              <thead className="bg-(--grey-3)">
                <tr>
                  <th className="p-5 text-sm font-semibold text-(--black-50)">Style Name</th>
                  <th className="p-5 text-sm font-semibold text-(--black-50)">Sample Text</th>
                  <th className="p-5 text-sm font-semibold text-(--black-50)">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-(--black-25)/10">
                {typography.map((typo) => (
                  <tr key={typo.name} className="hover:bg-white transition-colors">
                    <td className="p-5 align-middle">
                      <span className="text-sm font-medium">{typo.name}</span>
                    </td>
                    <td className="p-5 align-middle">
                      <div className={typo.class}>The quick brown fox jumps over the lazy dog</div>
                    </td>
                    <td className="p-5 align-middle">
                      <span className="text-xs font-mono text-(--black-50)">{typo.size} / {typo.weight}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Components Section */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">Interactive Components</h2>
            <div className="h-px flex-1 bg-(--black-25) opacity-20"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Buttons Preview */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-(--black-50)">Buttons & Styles</h3>
              <div className="card shadow-sm border-(--black-25)/20 space-y-10">
                <div className="flex flex-wrap items-center gap-6">
                  <Button variant="primary">Action Primary</Button>
                  <Button 
                    variant="primary" 
                    leftIcon={
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    }
                  >
                    Continue
                  </Button>
                  <Button variant="secondary">Secondary</Button>
                </div>
                <div className="flex flex-wrap items-end gap-6">
                  <Button size="small">Small</Button>
                  <Button size="default">Default Size</Button>
                  <Button size="large">Large Master</Button>
                </div>
                <div className="flex gap-4">
                  <Button variant="ghost">Cancel</Button>
                  <Button variant="link">View Details</Button>
                </div>
              </div>
            </div>

            {/* Inputs Preview */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-(--black-50)">Forms & Controls</h3>
              <div className="card shadow-sm border-(--black-25)/20 space-y-6">
                <Input
                  label="Global Search"
                  placeholder="Enter keywords..."
                  leftIcon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                    </svg>
                  }
                />
                <Input
                  label="Account Email"
                  placeholder="name@company.com"
                  hint="We use this for important notifications"
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                  error="Critical: Password sequence invalid"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DesignSystem

