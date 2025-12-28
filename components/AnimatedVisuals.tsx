"use client";
import { motion } from "framer-motion";
import { useState } from "react";

// ==========================================
// 1. Distributed Ledger: Nodes connecting
// ==========================================
export const LedgerVisual = () => {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [pulseAll, setPulseAll] = useState(false);

  return (
    <div 
      className="h-40 w-full flex items-center justify-center relative cursor-pointer"
      onClick={() => {
        setPulseAll(true);
        setTimeout(() => setPulseAll(false), 1000);
      }}
    >
      {/* The Nodes */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10 cursor-pointer"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.8, boxShadow: "0 0 20px rgba(59,130,246,1)" }}
          animate={{
            scale: pulseAll ? [1, 1.5, 1] : hoveredNode === i ? 1.3 : 1,
            boxShadow: hoveredNode === i ? "0 0 15px rgba(59,130,246,1)" : "0 0 10px rgba(59,130,246,0.8)"
          }}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
          onHoverStart={() => setHoveredNode(i)}
          onHoverEnd={() => setHoveredNode(null)}
          style={{
            top: `${50 + 35 * Math.sin((i * 2 * Math.PI) / 5)}%`,
            left: `${50 + 35 * Math.cos((i * 2 * Math.PI) / 5)}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
      
      {/* The Connecting Ring */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.circle
          cx="50%"
          cy="50%"
          r="30%"
          stroke="rgba(59,130,246,0.3)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          animate={{ 
            stroke: pulseAll ? "rgba(59,130,246,0.8)" : "rgba(59,130,246,0.3)",
            strokeWidth: pulseAll ? "3" : "2"
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
      <p className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 whitespace-nowrap">Click to sync • Hover nodes</p>
    </div>
  );
};

// ==========================================
// 2. Blockchain: Blocks linking together
// ==========================================
export const ChainVisual = () => {
  const [blocks, setBlocks] = useState([1]);
  const [hoveredBlock, setHoveredBlock] = useState<number | null>(null);

  const addBlock = () => {
    if (blocks.length < 6) {
      setBlocks([...blocks, blocks.length + 1]);
    }
  };

  const resetChain = () => {
    setBlocks([1]);
  };

  return (
    <div className="h-32 w-full flex flex-col items-center justify-center gap-2">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 max-w-full px-4">
        {blocks.map((i, index) => (
          <div key={i} className="flex items-center">
            <motion.div
              className="w-16 h-16 border-2 border-emerald-500 bg-emerald-500/10 rounded-lg flex items-center justify-center text-xs font-mono text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.2)] cursor-pointer relative"
              initial={{ x: -20, opacity: 0 }}
              animate={{ 
                x: 0, 
                opacity: 1,
                scale: hoveredBlock === i ? 1.1 : 1,
                borderColor: hoveredBlock === i ? "rgb(52, 211, 153)" : "rgb(16, 185, 129)",
              }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.2, type: "spring" }}
              onHoverStart={() => setHoveredBlock(i)}
              onHoverEnd={() => setHoveredBlock(null)}
            >
              <span>Block {i}</span>
              {hoveredBlock === i && (
                <motion.div
                  className="absolute -top-8 text-[10px] bg-emerald-500/20 px-2 py-1 rounded whitespace-nowrap"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Hash: {i}x3f9a
                </motion.div>
              )}
            </motion.div>
            {/* Connector Line */}
            {index < blocks.length - 1 && (
              <motion.div
                className="w-8 h-1 bg-emerald-700 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ delay: index * 0.2 + 0.1 }}
              />
            )}
          </div>
        ))}
        {blocks.length < 6 && (
          <motion.button
            onClick={addBlock}
            className="w-16 h-16 border-2 border-dashed border-emerald-500/50 rounded-lg flex items-center justify-center text-2xl text-emerald-500/50 hover:text-emerald-500 hover:border-emerald-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            +
          </motion.button>
        )}
      </div>
      <div className="flex gap-2 text-[10px]">
        <button onClick={addBlock} className="text-emerald-400 hover:text-emerald-300">+ Add Block</button>
        <span className="text-gray-600">•</span>
        <button onClick={resetChain} className="text-gray-500 hover:text-gray-400">Reset</button>
      </div>
    </div>
  );
};

// ==========================================
// 3. Merkle Tree: Interactive Builder
// ==========================================
export const MerkleVisual = () => {
  // Available nodes pool
  const [availableNodes, setAvailableNodes] = useState(['A', 'B', 'C', 'D', 'E', 'F']);
  
  // Tree structure: 4 leaf positions
  const [leafSlots, setLeafSlots] = useState<(string | null)[]>([null, null, null, null]);
  
  // Parent nodes generated from pairs
  const [parentNodes, setParentNodes] = useState<{ [key: string]: string }>({});

  // Calculate hash name from two children
  const generateHash = (left: string, right: string) => {
    return `H(${left}${right})`;
  };

  // Check and update parent nodes when leaves change
  const updateParentNodes = (slots: (string | null)[]) => {
    const newParents: { [key: string]: string } = {};
    
    // Level 1 parents (from leaf pairs)
    if (slots[0] && slots[1]) newParents['p0'] = generateHash(slots[0], slots[1]);
    if (slots[2] && slots[3]) newParents['p1'] = generateHash(slots[2], slots[3]);
    
    // Level 2 parent (root) - only if both level 1 parents exist
    if (newParents['p0'] && newParents['p1']) {
      newParents['root'] = generateHash(newParents['p0'].slice(2, 4), newParents['p1'].slice(2, 4));
    }
    
    setParentNodes(newParents);
  };

  const addNodeToNextSlot = (node: string) => {
    const emptySlotIndex = leafSlots.findIndex(slot => slot === null);
    if (emptySlotIndex !== -1) {
      const newSlots = [...leafSlots];
      newSlots[emptySlotIndex] = node;
      setLeafSlots(newSlots);
      setAvailableNodes(availableNodes.filter(n => n !== node));
      updateParentNodes(newSlots);
    }
  };

  const removeNode = (slotIndex: number) => {
    const node = leafSlots[slotIndex];
    if (node) {
      setAvailableNodes([...availableNodes, node].sort());
      const newSlots = [...leafSlots];
      newSlots[slotIndex] = null;
      setLeafSlots(newSlots);
      updateParentNodes(newSlots);
    }
  };

  return (
    <div className="h-80 w-full flex flex-col items-center justify-center py-6 relative select-none">
      
      {/* SVG Connection Lines - Always rendered but opacity based on nodes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
        {/* Complete tree structure - always present */}
        
        {/* Leaf 0 to Parent 0 */}
        <motion.line
          x1="36%" y1="60%" x2="40%" y2="42%"
          stroke="rgba(245,158,11,0.5)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: leafSlots[0] && parentNodes['p0'] ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Leaf 1 to Parent 0 */}
        <motion.line
          x1="42%" y1="60%" x2="42%" y2="42%"
          stroke="rgba(245,158,11,0.5)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: leafSlots[1] && parentNodes['p0'] ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Leaf 2 to Parent 1 */}
        <motion.line
          x1="58%" y1="60%" x2="58%" y2="42%"
          stroke="rgba(245,158,11,0.5)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: leafSlots[2] && parentNodes['p1'] ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Leaf 3 to Parent 1 */}
        <motion.line
          x1="64%" y1="60%" x2="60%" y2="42%"
          stroke="rgba(245,158,11,0.5)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: leafSlots[3] && parentNodes['p1'] ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Parent 0 to Root */}
        <motion.line
          x1="41%" y1="30%" x2="48%" y2="18%"
          stroke="rgba(245,158,11,0.6)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: parentNodes['p0'] && parentNodes['root'] ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Parent 1 to Root */}
        <motion.line
          x1="59%" y1="30%" x2="52%" y2="18%"
          stroke="rgba(245,158,11,0.6)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: parentNodes['p1'] && parentNodes['root'] ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </svg>
      
      {/* Root Node */}
      <div className="flex justify-center mb-8 relative z-10">
        {parentNodes['root'] && (
          <motion.div
            className="w-20 h-14 bg-amber-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.6)]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring" }}
          >
            <span className="text-[9px] font-bold text-black text-center px-1">{parentNodes['root']}</span>
          </motion.div>
        )}
      </div>

      {/* Level 2: Parent Hashes */}
      <div className="flex gap-20 mb-6 relative z-10">
        {[0, 1].map((i) => (
          <div key={i} className="w-16 h-12 relative">
            {parentNodes[`p${i}`] && (
              <motion.div
                className="w-full h-full border-2 border-amber-500/60 bg-amber-900/30 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
              >
                <span className="text-[9px] text-amber-300 font-semibold text-center px-1">{parentNodes[`p${i}`]}</span>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Level 1: Leaf Slots */}
      <div className="flex gap-4 mb-6 relative z-20">
        {leafSlots.map((node, i) => (
          <motion.div
            key={i}
            data-slot={i}
            className={`w-12 h-12 rounded-lg border-2 border-dashed flex items-center justify-center ${
              node ? 'bg-blue-500/20 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)]' : 'bg-gray-800/30 border-gray-600'
            }`}
            whileHover={{ scale: 1.08 }}
          >
            {node ? (
              <motion.div
                className="w-full h-full bg-blue-500 rounded-md flex items-center justify-center cursor-pointer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => removeNode(i)}
              >
                <span className="text-sm font-bold text-white">{node}</span>
              </motion.div>
            ) : (
              <span className="text-sm text-gray-600">?</span>
            )}
          </motion.div>
        ))}
      </div>

      {/* Available Nodes Pool */}
      <div className="flex gap-3 p-4 bg-gray-900/40 rounded-lg border border-gray-700 relative z-10">
        <span className="text-xs text-gray-400 mr-2">Click →</span>
        {availableNodes.map((node) => (
          <motion.div
            key={node}
            className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer border border-gray-600"
            whileHover={{ scale: 1.15, backgroundColor: "rgb(59, 130, 246)", borderColor: "rgb(59, 130, 246)" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => addNodeToNextSlot(node)}
          >
            <span className="text-sm font-bold text-white">{node}</span>
          </motion.div>
        ))}
      </div>

      <p className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[11px] text-gray-500 whitespace-nowrap">
        Click nodes to add • Parents auto-generate • Click placed nodes to remove
      </p>
    </div>
  );
};

// ==========================================
// 4. Platforms: Speed Comparison Chart
// ==========================================
export const SpeedVisual = () => {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const [animate, setAnimate] = useState(false);

  const stats = [
    { label: "ETH", height: "30%", color: "bg-purple-500", tps: "~15-30", detail: "Ethereum L1" },
    { label: "ALGO", height: "60%", color: "bg-gray-500", tps: "~10K", detail: "Algorand" },
    { label: "SOL", height: "95%", color: "bg-teal-400", tps: "Thousands", detail: "Solana" },
  ];

  return (
    <div 
      className="h-56 w-full flex flex-col items-center justify-center relative cursor-pointer"
      onClick={() => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 1500);
      }}
    >
      {/* Background grid lines for chart effect */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 px-8 py-8">
        <div className="w-full h-px bg-white/20" />
        <div className="w-full h-px bg-white/20" />
        <div className="w-full h-px bg-white/20" />
        <div className="w-full h-px bg-white/20" />
      </div>

      {/* Chart Area */}
      <div className="flex items-end justify-center gap-8 h-40 mb-4">
        {stats.map((stat, i) => (
          <div 
            key={i} 
            className="flex flex-col items-center gap-2 h-full justify-end"
            onMouseEnter={() => setHoveredBar(i)}
            onMouseLeave={() => setHoveredBar(null)}
          >
            <motion.div
              className={`w-16 rounded-t-md ${stat.color} shadow-lg cursor-pointer relative`}
              initial={{ height: 0 }}
              whileInView={{ height: stat.height }}
              animate={{
                height: animate ? [stat.height, "100%", stat.height] : stat.height,
                opacity: hoveredBar === i ? 1 : 0.9
              }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 12, delay: i * 0.2 }}
            >
              {hoveredBar === i && (
                <motion.div
                  className="absolute -top-14 left-1/2 -translate-x-1/2 bg-black/80 px-3 py-1 rounded text-[10px] whitespace-nowrap z-20"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="font-bold text-white">{stat.detail}</div>
                  <div className="text-gray-300">{stat.tps} TPS</div>
                </motion.div>
              )}
            </motion.div>
            <span className="text-xs font-bold text-gray-400">{stat.label}</span>
          </div>
        ))}
      </div>
      
    </div>
  );
};
