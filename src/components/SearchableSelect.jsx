import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, Check, X } from 'lucide-react';

export default function SearchableSelect({
  id,
  options = [],
  value = '',
  onChange,
  placeholder = 'Select an option',
  searchPlaceholder = 'Search...',
  disabled = false,
  disabledPlaceholder = 'Select previous option first',
  hasError = false,
  style = {}
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef(null);
  const searchInputRef = useRef(null);

  // Normalize options to [{ label, value }]
  const normalizedOptions = options.map(opt => {
    if (typeof opt === 'object' && opt !== null) {
      return { label: opt.label ?? opt.value, value: opt.value };
    }
    return { label: String(opt), value: String(opt) };
  });

  // Filter options based on query
  const filteredOptions = normalizedOptions.filter(opt =>
    opt.label.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 50);
    }
  }, [isOpen]);

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen(prev => !prev);
  };

  const handleSelect = (val) => {
    onChange(val);
    setIsOpen(false);
    setSearchQuery('');
  };

  const handleClear = (e) => {
    e.stopPropagation();
    if (disabled) return;
    onChange('');
  };

  const selectedOption = normalizedOptions.find(opt => opt.value === value);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: 'relative', 
        width: '100%', 
        userSelect: 'none',
        ...style 
      }}
    >
      {/* Trigger Button */}
      <div
        id={id}
        role="combobox"
        aria-expanded={isOpen}
        aria-disabled={disabled}
        onClick={handleToggle}
        style={{
          width: '100%',
          height: '42px',
          padding: '0 0.85rem',
          borderRadius: '8px',
          border: hasError ? '1px solid #ef4444' : '1px solid #cbd5e1',
          background: disabled ? '#f8fafc' : '#ffffff',
          color: disabled ? '#94a3b8' : selectedOption ? '#0f172a' : '#64748b',
          fontSize: '0.88rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: disabled ? 'not-allowed' : 'pointer',
          boxSizing: 'border-box',
          boxShadow: hasError ? '0 0 0 3px rgba(239, 68, 68, 0.15)' : 'none',
          transition: 'all 0.15s ease',
          outline: 'none'
        }}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') && !isOpen && !disabled) {
            e.preventDefault();
            setIsOpen(true);
          } else if (e.key === 'Escape') {
            setIsOpen(false);
          }
        }}
      >
        <span 
          style={{ 
            whiteSpace: 'nowrap', 
            overflow: 'hidden', 
            textOverflow: 'ellipsis',
            flex: 1,
            fontWeight: selectedOption ? 500 : 400
          }}
        >
          {disabled 
            ? disabledPlaceholder 
            : selectedOption 
              ? selectedOption.label 
              : placeholder}
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginLeft: '0.5rem', flexShrink: 0 }}>
          {selectedOption && !disabled && (
            <button
              type="button"
              onClick={handleClear}
              title="Clear selection"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#e2e8f0',
                border: 'none',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                padding: 0,
                color: '#64748b',
                cursor: 'pointer',
                transition: 'background 0.15s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#cbd5e1'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#e2e8f0'}
            >
              <X size={12} strokeWidth={2.5} />
            </button>
          )}
          <ChevronDown
            size={16}
            style={{
              color: disabled ? '#94a3b8' : '#64748b',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease'
            }}
          />
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && !disabled && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: 0,
            right: 0,
            zIndex: 1000,
            background: '#ffffff',
            borderRadius: '10px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 12px 30px -4px rgba(15, 23, 42, 0.15), 0 4px 12px -2px rgba(15, 23, 42, 0.08)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            animation: 'fadeInSelect 0.15s ease-out'
          }}
        >
          {/* Search Input Box */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0.55rem 0.75rem',
              borderBottom: '1px solid #f1f5f9',
              background: '#f8fafc',
              gap: '0.5rem'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Search size={15} style={{ color: '#94a3b8', flexShrink: 0 }} />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={searchPlaceholder}
              style={{
                width: '100%',
                border: 'none',
                background: 'transparent',
                outline: 'none',
                fontSize: '0.84rem',
                color: '#0f172a',
                padding: '0.1rem 0',
                fontFamily: 'inherit'
              }}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  setIsOpen(false);
                } else if (e.key === 'Enter' && filteredOptions.length > 0) {
                  e.preventDefault();
                  handleSelect(filteredOptions[0].value);
                }
              }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '2px',
                  cursor: 'pointer',
                  color: '#94a3b8',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Options List */}
          <div
            style={{
              maxHeight: '220px',
              overflowY: 'auto',
              padding: '0.35rem 0'
            }}
          >
            {filteredOptions.length === 0 ? (
              <div
                style={{
                  padding: '0.9rem 1rem',
                  textAlign: 'center',
                  fontSize: '0.82rem',
                  color: '#94a3b8'
                }}
              >
                No results found
              </div>
            ) : (
              filteredOptions.map((opt) => {
                const isSelected = opt.value === value;
                return (
                  <div
                    key={opt.value}
                    onClick={() => handleSelect(opt.value)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.55rem 0.85rem',
                      fontSize: '0.85rem',
                      color: isSelected ? '#0284c7' : '#1e293b',
                      background: isSelected ? '#f0f9ff' : 'transparent',
                      fontWeight: isSelected ? 600 : 400,
                      cursor: 'pointer',
                      transition: 'background 0.12s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) e.currentTarget.style.background = '#f8fafc';
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <span>{opt.label}</span>
                    {isSelected && <Check size={15} style={{ color: '#0284c7', flexShrink: 0 }} />}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
