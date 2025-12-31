
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ROADMAP_DATA } from './constants';
import { RoadmapStep, RoadmapItem } from './types';
import { ChevronDownIcon, CheckIcon, MoonIcon, SunIcon, RefreshCwIcon } from './components/Icons';

const LOCAL_STORAGE_KEY = 'ds_roadmap_progress';

const App: React.FC = () => {
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [expandedSteps, setExpandedSteps] = useState<string[]>(['step1']);

  // Load state from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setCompletedIds(parsed.completedIds || []);
        setIsDarkMode(parsed.isDarkMode || false);
        setExpandedSteps(parsed.expandedSteps || ['step1']);
      } catch (e) {
        console.error('Failed to parse saved state', e);
      }
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
      completedIds,
      isDarkMode,
      expandedSteps
    }));
  }, [completedIds, isDarkMode, expandedSteps]);

  // Apply dark mode class to body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('bg-slate-900', 'text-slate-100');
      document.body.classList.remove('bg-slate-50', 'text-slate-900');
    } else {
      document.body.classList.add('bg-slate-50', 'text-slate-900');
      document.body.classList.remove('bg-slate-900', 'text-slate-100');
    }
  }, [isDarkMode]);

  const totalItems = useMemo(() => 
    ROADMAP_DATA.reduce((acc, step) => acc + step.items.length, 0), 
  []);

  const overallProgress = useMemo(() => 
    totalItems === 0 ? 0 : Math.round((completedIds.length / totalItems) * 100),
  [completedIds, totalItems]);

  const toggleItem = useCallback((id: string) => {
    setCompletedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  }, []);

  const toggleStep = useCallback((id: string) => {
    setExpandedSteps(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  }, []);

  const resetProgress = useCallback(() => {
    if (window.confirm('Are you sure you want to reset all your progress?')) {
      setCompletedIds([]);
    }
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  return (
    <div className={`min-h-screen pb-20 transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      {/* Sticky Header */}
      <header className={`sticky top-0 z-50 w-full border-b backdrop-blur-md ${isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-3xl mx-auto px-4 py-4 md:py-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">Data Science Roadmap</h1>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Your journey from basics to advanced</p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-slate-800 text-yellow-400' : 'hover:bg-slate-100 text-slate-600'}`}
                title="Toggle Dark Mode"
              >
                {isDarkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              </button>
              <button 
                onClick={resetProgress}
                className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-100 text-slate-600'}`}
                title="Reset Progress"
              >
                <RefreshCwIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Global Progress */}
          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm font-bold">{overallProgress}%</span>
            </div>
            <div className={`h-2.5 w-full rounded-full overflow-hidden ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
              <div 
                className="h-full bg-blue-600 transition-all duration-500 ease-out rounded-full shadow-[0_0_12px_rgba(37,99,235,0.4)]"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Roadmap Content */}
      <main className="max-w-3xl mx-auto px-4 mt-8 space-y-4">
        {ROADMAP_DATA.map((step) => (
          <StepAccordion 
            key={step.id} 
            step={step} 
            isExpanded={expandedSteps.includes(step.id)}
            toggleExpanded={() => toggleStep(step.id)}
            completedIds={completedIds}
            toggleItem={toggleItem}
            isDarkMode={isDarkMode}
          />
        ))}
      </main>

      {/* Footer / Summary Info */}
      <footer className={`mt-12 text-center text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
        <p>Stay focused, keep practicing.</p>
        <p className="mt-1">{completedIds.length} of {totalItems} topics mastered</p>
      </footer>
    </div>
  );
};

interface StepAccordionProps {
  step: RoadmapStep;
  isExpanded: boolean;
  toggleExpanded: () => void;
  completedIds: string[];
  toggleItem: (id: string) => void;
  isDarkMode: boolean;
}

const StepAccordion: React.FC<StepAccordionProps> = ({ 
  step, isExpanded, toggleExpanded, completedIds, toggleItem, isDarkMode 
}) => {
  const stepCompletedCount = step.items.filter(item => completedIds.includes(item.id)).length;
  const stepTotalCount = step.items.length;
  const isStepComplete = stepCompletedCount === stepTotalCount;

  // Track expanded sub-categories locally within the step
  const [expandedCats, setExpandedCats] = useState<string[]>([]);

  // Toggle category visibility
  const toggleCat = (cat: string) => {
    setExpandedCats(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  // Group items by category if they have one
  const groupedItems = useMemo(() => {
    const groups: { [key: string]: RoadmapItem[] } = {};
    const flat: RoadmapItem[] = [];
    
    step.items.forEach(item => {
      if (item.category) {
        if (!groups[item.category]) groups[item.category] = [];
        groups[item.category].push(item);
      } else {
        flat.push(item);
      }
    });

    return { groups, flat };
  }, [step.items]);

  return (
    <div className={`overflow-hidden rounded-xl border transition-all duration-300 ${
      isDarkMode 
        ? 'bg-slate-800/50 border-slate-700 hover:border-slate-600' 
        : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
    }`}>
      {/* Header */}
      <button 
        onClick={toggleExpanded}
        className="w-full px-5 py-4 flex items-center justify-between text-left group"
      >
        <div className="flex-1">
          <h3 className={`font-semibold text-lg md:text-xl transition-colors ${
            isStepComplete ? (isDarkMode ? 'text-slate-500' : 'text-slate-400') : ''
          }`}>
            {step.title}
          </h3>
          <div className="flex items-center gap-3 mt-1">
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
              isStepComplete 
                ? (isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700')
                : (isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600')
            }`}>
              {stepCompletedCount}/{stepTotalCount} Completed
            </span>
          </div>
        </div>
        <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
          <ChevronDownIcon className="w-6 h-6 text-slate-400 group-hover:text-blue-500" />
        </div>
      </button>

      {/* List */}
      <div 
        className={`transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[3000px] opacity-100 pb-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className={`px-2 space-y-1 border-t ${isDarkMode ? 'border-slate-700' : 'border-slate-50'}`}>
          {/* Render Groups with Collapsible Sub-accordions */}
          {(Object.entries(groupedItems.groups) as [string, RoadmapItem[]][]).map(([category, items]) => {
            const isCatExpanded = expandedCats.includes(category);
            const catCompleted = items.filter(i => completedIds.includes(i.id)).length;
            
            return (
              <div key={category} className="mt-2 mx-2 border rounded-lg overflow-hidden transition-colors border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/20">
                <button 
                  onClick={() => toggleCat(category)}
                  className={`w-full px-4 py-3 flex items-center justify-between text-left transition-colors ${
                    isCatExpanded ? 'bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700' : ''
                  }`}
                >
                  <div className="flex flex-col">
                    <span className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {category}
                    </span>
                    <span className="text-[10px] opacity-60 font-medium">
                      {catCompleted}/{items.length} Complete
                    </span>
                  </div>
                  <ChevronDownIcon className={`w-4 h-4 text-slate-400 transition-transform ${isCatExpanded ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${isCatExpanded ? 'max-h-[1000px] opacity-100 py-1' : 'max-h-0 opacity-0'}`}>
                  {items.map(item => (
                    <RoadmapCheckItem 
                      key={item.id} 
                      item={item} 
                      isChecked={completedIds.includes(item.id)}
                      onToggle={() => toggleItem(item.id)}
                      isDarkMode={isDarkMode}
                    />
                  ))}
                </div>
              </div>
            );
          })}
          
          {/* Render Flat Items (no category) */}
          {groupedItems.flat.length > 0 && (
             <div className="pt-2">
                {groupedItems.flat.map((item) => (
                  <RoadmapCheckItem 
                    key={item.id} 
                    item={item} 
                    isChecked={completedIds.includes(item.id)}
                    onToggle={() => toggleItem(item.id)}
                    isDarkMode={isDarkMode}
                  />
                ))}
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface RoadmapCheckItemProps {
  item: RoadmapItem;
  isChecked: boolean;
  onToggle: () => void;
  isDarkMode: boolean;
}

const RoadmapCheckItem: React.FC<RoadmapCheckItemProps> = ({ item, isChecked, onToggle, isDarkMode }) => {
  return (
    <div 
      onClick={onToggle}
      className={`flex items-center gap-4 px-4 py-3 rounded-lg cursor-pointer group roadmap-item-transition ${
        isChecked 
          ? (isDarkMode ? 'bg-slate-900/30' : 'bg-slate-50') 
          : (isDarkMode ? 'hover:bg-slate-700/50' : 'hover:bg-blue-50/50')
      }`}
    >
      <div className={`relative flex items-center justify-center w-6 h-6 rounded border-2 transition-all duration-200 flex-shrink-0 ${
        isChecked 
          ? 'bg-blue-600 border-blue-600 scale-105' 
          : (isDarkMode ? 'border-slate-600 bg-slate-800 group-hover:border-blue-500' : 'border-slate-300 bg-white group-hover:border-blue-400 shadow-sm')
      }`}>
        {isChecked && <CheckIcon className="w-4 h-4 text-white" />}
      </div>
      <span className={`flex-1 text-base md:text-lg transition-all duration-200 ${
        isChecked 
          ? `${isDarkMode ? 'text-slate-500' : 'text-slate-400'} line-through` 
          : (isDarkMode ? 'text-slate-200' : 'text-slate-700 font-medium')
      }`}>
        {item.label}
      </span>
    </div>
  );
};

export default App;
