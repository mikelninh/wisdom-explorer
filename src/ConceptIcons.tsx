const icons: Record<string, (size: number) => JSX.Element> = {
  'light-universe': (size) => (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <defs>
        <radialGradient id="sun-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9"/>
          <stop offset="60%" stopColor="#d97706" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#92400e" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#sun-glow)" opacity="0.3"/>
      <circle cx="60" cy="60" r="35" fill="none" stroke="#fbbf24" strokeWidth="0.5" opacity="0.3"/>
      <circle cx="60" cy="60" r="45" fill="none" stroke="#fbbf24" strokeWidth="0.5" opacity="0.2"/>
      <circle cx="60" cy="60" r="16" fill="#fbbf24" opacity="0.9"/>
      <circle cx="60" cy="60" r="10" fill="#fef3c7"/>
      {[0,30,60,90,120,150,180,210,240,270,300,330].map(a => (
        <line key={a} x1={60+22*Math.cos(a*Math.PI/180)} y1={60+22*Math.sin(a*Math.PI/180)}
              x2={60+32*Math.cos(a*Math.PI/180)} y2={60+32*Math.sin(a*Math.PI/180)}
              stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      ))}
    </svg>
  ),

  'human-hue-man': (size) => (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <defs>
        <linearGradient id="spectrum" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8b5cf6"/>
          <stop offset="25%" stopColor="#3b82f6"/>
          <stop offset="50%" stopColor="#22c55e"/>
          <stop offset="75%" stopColor="#eab308"/>
          <stop offset="100%" stopColor="#ef4444"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="30" r="12" fill="url(#spectrum)" opacity="0.85"/>
      <path d="M60 42 L60 78" stroke="url(#spectrum)" strokeWidth="3" strokeLinecap="round"/>
      <path d="M60 52 L42 65" stroke="url(#spectrum)" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M60 52 L78 65" stroke="url(#spectrum)" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M60 78 L45 100" stroke="url(#spectrum)" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M60 78 L75 100" stroke="url(#spectrum)" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="60" cy="60" r="42" fill="none" stroke="url(#spectrum)" strokeWidth="0.8" opacity="0.25"/>
      <circle cx="60" cy="60" r="50" fill="none" stroke="url(#spectrum)" strokeWidth="0.5" opacity="0.15"/>
    </svg>
  ),

  'christ-oil': (size) => (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <defs>
        <linearGradient id="oil-grad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#d4a853" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.9"/>
        </linearGradient>
      </defs>
      <path d="M60 15 L60 105" stroke="#4a4a6a" strokeWidth="2.5" strokeLinecap="round"/>
      {[20,28,36,44,52,60,68,76,84,92].map((y,i) => (
        <ellipse key={i} cx="60" cy={y} rx={4+i*0.3} ry="2" fill="none" stroke="#6b677a" strokeWidth="0.8" opacity="0.5"/>
      ))}
      <circle cx="60" cy="30" r="4" fill="url(#oil-grad)"/>
      <circle cx="60" cy="45" r="3" fill="url(#oil-grad)" opacity="0.7"/>
      <circle cx="60" cy="58" r="2.5" fill="url(#oil-grad)" opacity="0.5"/>
      <ellipse cx="60" cy="18" rx="16" ry="10" fill="none" stroke="#d4a853" strokeWidth="1" opacity="0.4"/>
      <circle cx="60" cy="12" r="5" fill="#d4a853" opacity="0.3"/>
    </svg>
  ),

  'pineal-gland': (size) => (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <defs>
        <radialGradient id="eye-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="40" fill="url(#eye-glow)" opacity="0.3"/>
      <path d="M20 60 Q60 25 100 60 Q60 95 20 60Z" fill="none" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.7"/>
      <circle cx="60" cy="60" r="16" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
      <circle cx="60" cy="60" r="8" fill="#8b5cf6" opacity="0.8"/>
      <circle cx="60" cy="60" r="3" fill="#c4b5fd"/>
      {[0,60,120,180,240,300].map(a => (
        <line key={a} x1={60+20*Math.cos(a*Math.PI/180)} y1={60+20*Math.sin(a*Math.PI/180)}
              x2={60+28*Math.cos(a*Math.PI/180)} y2={60+28*Math.sin(a*Math.PI/180)}
              stroke="#8b5cf6" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
      ))}
      <path d="M60 15 L56 25 L64 25Z" fill="#8b5cf6" opacity="0.5"/>
    </svg>
  ),

  'kundalini': (size) => (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <path d="M60 105 L60 15" stroke="#6b677a" strokeWidth="2" strokeLinecap="round"/>
      <path d="M60 95 Q75 85 60 75 Q45 65 60 55 Q75 45 60 35 Q50 28 60 20"
            fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      <path d="M60 95 Q45 85 60 75 Q75 65 60 55 Q45 45 60 35 Q70 28 60 20"
            fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      <circle cx="60" cy="15" r="5" fill="none" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.8"/>
      <circle cx="60" cy="15" r="2" fill="#8b5cf6"/>
      {[95,75,55,35].map((y,i) => (
        <circle key={i} cx="60" cy={y} r={2} fill={['#ef4444','#eab308','#22c55e','#3b82f6'][i]} opacity="0.6"/>
      ))}
    </svg>
  ),

  'three-wise-men': (size) => (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <ellipse cx="60" cy="55" rx="38" ry="32" fill="none" stroke="#9a96a8" strokeWidth="1" opacity="0.4"/>
      <path d="M30 55 Q60 30 90 55" fill="none" stroke="#9a96a8" strokeWidth="1" opacity="0.5"/>
      <circle cx="42" cy="50" r="8" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.7"/>
      <circle cx="42" cy="50" r="3" fill="#3b82f6" opacity="0.5"/>
      <circle cx="60" cy="42" r="8" fill="none" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.7"/>
      <circle cx="60" cy="42" r="3" fill="#8b5cf6" opacity="0.5"/>
      <circle cx="78" cy="50" r="8" fill="none" stroke="#d4a853" strokeWidth="1.5" opacity="0.7"/>
      <circle cx="78" cy="50" r="3" fill="#d4a853" opacity="0.5"/>
      {[42,60,78].map((x,i) => (
        <path key={i} d={`M${x} ${[42,34,42][i]-14} l-2-5 l2-2 l2 2Z`} fill={['#3b82f6','#8b5cf6','#d4a853'][i]} opacity="0.6"/>
      ))}
      <path d="M60 75 L60 100" stroke="#6b677a" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
    </svg>
  ),

  'vibration-law': (size) => (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      {[50,42,34,26,18,12,8].map((r,i) => (
        <circle key={i} cx="60" cy="60" r={r} fill="none"
                stroke={i%2===0 ? '#d4a853' : '#8b5cf6'} strokeWidth="0.8"
                opacity={0.15 + i*0.08}/>
      ))}
      <circle cx="60" cy="60" r="4" fill="#d4a853" opacity="0.8"/>
      <path d="M15 60 Q30 45 45 60 Q60 75 75 60 Q90 45 105 60"
            fill="none" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.5"/>
      <path d="M15 60 Q30 52 45 60 Q60 68 75 60 Q90 52 105 60"
            fill="none" stroke="#d4a853" strokeWidth="1" opacity="0.3"/>
    </svg>
  ),

  'flat-earth': (size) => (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <circle cx="60" cy="60" r="35" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5"/>
      <ellipse cx="60" cy="60" rx="35" ry="12" fill="none" stroke="#3b82f6" strokeWidth="0.8" opacity="0.3"/>
      <ellipse cx="60" cy="60" rx="12" ry="35" fill="none" stroke="#3b82f6" strokeWidth="0.8" opacity="0.3" transform="rotate(30 60 60)"/>
      <ellipse cx="60" cy="60" rx="12" ry="35" fill="none" stroke="#3b82f6" strokeWidth="0.8" opacity="0.3" transform="rotate(-30 60 60)"/>
      <circle cx="60" cy="60" r="4" fill="#3b82f6" opacity="0.5"/>
      <circle cx="60" cy="60" r="48" fill="none" stroke="#6b677a" strokeWidth="0.5" opacity="0.2" strokeDasharray="3 3"/>
    </svg>
  ),

  'astrotheology': (size) => (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <circle cx="60" cy="60" r="14" fill="#fbbf24" opacity="0.8"/>
      <circle cx="60" cy="60" r="8" fill="#fef3c7"/>
      <circle cx="60" cy="60" r="30" fill="none" stroke="#d4a853" strokeWidth="0.8" opacity="0.3"/>
      <circle cx="60" cy="60" r="42" fill="none" stroke="#d4a853" strokeWidth="0.5" opacity="0.2"/>
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((a,i) => (
        <g key={i}>
          <line x1={60+30*Math.cos(a*Math.PI/180)} y1={60+30*Math.sin(a*Math.PI/180)}
                x2={60+42*Math.cos(a*Math.PI/180)} y2={60+42*Math.sin(a*Math.PI/180)}
                stroke="#d4a853" strokeWidth="0.5" opacity="0.3"/>
          <circle cx={60+36*Math.cos(a*Math.PI/180)} cy={60+36*Math.sin(a*Math.PI/180)}
                  r="1.5" fill="#d4a853" opacity={0.3+i*0.02}/>
        </g>
      ))}
    </svg>
  ),

  'kabbalah': (size) => {
    const nodes = [
      [60,12],[38,28],[82,28],[38,52],[82,52],[60,52],[38,76],[82,76],[60,88],[60,108]
    ]
    const edges = [[0,1],[0,2],[1,3],[2,4],[1,5],[2,5],[3,5],[4,5],[3,6],[4,7],[5,8],[6,8],[7,8],[6,9],[7,9],[8,9]]
    return (
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
        {edges.map(([a,b],i) => (
          <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
                stroke="#8b5cf6" strokeWidth="0.8" opacity="0.3"/>
        ))}
        {nodes.map(([x,y],i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="6" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.6"/>
            <circle cx={x} cy={y} r="2.5" fill="#8b5cf6" opacity={0.4 + i*0.04}/>
          </g>
        ))}
      </svg>
    )
  },

  'veganism': (size) => (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <path d="M60 100 L60 55" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
      <path d="M60 55 Q50 40 40 50" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <path d="M60 65 Q70 50 80 60" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <path d="M60 45 Q55 30 48 35" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <path d="M60 45 Q65 30 72 35" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <circle cx="60" cy="28" r="3" fill="#22c55e" opacity="0.6"/>
      <circle cx="60" cy="20" r="2" fill="#22c55e" opacity="0.4"/>
      {[0,60,120,180,240,300].map(a => (
        <circle key={a} cx={60+18*Math.cos(a*Math.PI/180)} cy={100+18*Math.sin(a*Math.PI/180)-18}
                r="1.5" fill="#22c55e" opacity="0.2"/>
      ))}
      <circle cx="60" cy="82" r="18" fill="none" stroke="#22c55e" strokeWidth="0.6" opacity="0.15"/>
    </svg>
  ),

  'meditation': (size) => (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <defs>
        <radialGradient id="aura" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="60" cy="55" r="45" fill="url(#aura)"/>
      <circle cx="60" cy="35" r="9" fill="none" stroke="#c4b5fd" strokeWidth="1.5" opacity="0.7"/>
      <path d="M60 44 L60 68" stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      <path d="M60 52 L48 62" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <path d="M60 52 L72 62" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <path d="M45 75 Q52 68 60 68 Q68 68 75 75" fill="none" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <path d="M38 80 L48 75 L60 80 L72 75 L82 80" fill="none" stroke="#c4b5fd" strokeWidth="1.5" opacity="0.5"/>
      <circle cx="60" cy="22" r="3" fill="#8b5cf6" opacity="0.6"/>
      <circle cx="60" cy="22" r="8" fill="none" stroke="#8b5cf6" strokeWidth="0.8" opacity="0.3"/>
      <circle cx="60" cy="22" r="14" fill="none" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.15"/>
      <circle cx="60" cy="55" r="38" fill="none" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.1"/>
    </svg>
  ),

  'freemasonry': (size) => (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <path d="M60 18 L95 85 L25 85Z" fill="none" stroke="#d4a853" strokeWidth="1.5" opacity="0.6"/>
      <path d="M60 30 L82 78 L38 78Z" fill="none" stroke="#d4a853" strokeWidth="0.8" opacity="0.3"/>
      <circle cx="60" cy="55" r="12" fill="none" stroke="#d4a853" strokeWidth="1.2" opacity="0.5"/>
      <circle cx="60" cy="55" r="5" fill="#d4a853" opacity="0.7"/>
      <circle cx="60" cy="55" r="2" fill="#fef3c7"/>
      {[0,72,144,216,288].map(a => (
        <line key={a} x1={60+14*Math.cos((a-90)*Math.PI/180)} y1={55+14*Math.sin((a-90)*Math.PI/180)}
              x2={60+20*Math.cos((a-90)*Math.PI/180)} y2={55+20*Math.sin((a-90)*Math.PI/180)}
              stroke="#d4a853" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
      ))}
    </svg>
  ),

  'emerald-tablets': (size) => (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <defs>
        <linearGradient id="emerald" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#065f46" stopOpacity="0.8"/>
        </linearGradient>
      </defs>
      <rect x="32" y="18" width="56" height="84" rx="4" fill="url(#emerald)" opacity="0.15"
            stroke="#22c55e" strokeWidth="1" />
      <rect x="38" y="24" width="44" height="72" rx="2" fill="none" stroke="#22c55e" strokeWidth="0.5" opacity="0.3"/>
      <path d="M60 38 L50 55 L60 50 L70 55Z" fill="none" stroke="#22c55e" strokeWidth="1.2" opacity="0.6"/>
      <path d="M60 72 L50 55 L60 60 L70 55Z" fill="none" stroke="#22c55e" strokeWidth="1.2" opacity="0.6"/>
      {[44,50,56,62,68,74,80].map(y => (
        <line key={y} x1="44" y1={y} x2="76" y2={y} stroke="#22c55e" strokeWidth="0.3" opacity="0.2"/>
      ))}
    </svg>
  ),

  'electromagnetism': (size) => (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      {[0,60,120,180,240,300].map(a => {
        const cx2 = 60 + 20*Math.cos(a*Math.PI/180)
        const cy2 = 60 + 20*Math.sin(a*Math.PI/180)
        return (
          <circle key={a} cx={cx2} cy={cy2} r="20" fill="none"
                  stroke="#8b5cf6" strokeWidth="0.8" opacity="0.25"/>
        )
      })}
      <circle cx="60" cy="60" r="20" fill="none" stroke="#d4a853" strokeWidth="1" opacity="0.4"/>
      <circle cx="60" cy="60" r="4" fill="#d4a853" opacity="0.6"/>
      <circle cx="60" cy="60" r="38" fill="none" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.15"/>
      <circle cx="60" cy="60" r="50" fill="none" stroke="#8b5cf6" strokeWidth="0.3" opacity="0.1"/>
    </svg>
  )
}

export default function ConceptIcon({ id, size = 80 }: { id: string; size?: number }) {
  const renderer = icons[id]
  if (!renderer) return <span style={{ fontSize: size * 0.6 }}>?</span>
  return renderer(size)
}
