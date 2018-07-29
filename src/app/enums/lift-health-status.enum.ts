export enum HealthStatus {
    HEALTHY = "healthy",
    WARNING = "warning",
    MAINTENANCE = "maintenance",
    ERROR = "unhealthy",
    UNKNOWN = "unknown"
}

export const HealthStatusMapping: Map<string, HealthStatus> = new Map([
    ['healthy', HealthStatus.HEALTHY],
    ['warning', HealthStatus.WARNING],
    ['maintenance', HealthStatus.MAINTENANCE],
    ['unhealthy', HealthStatus.ERROR],
    ['unknown', HealthStatus.UNKNOWN]
]);

export const LiftHealthStatus: Map<HealthStatus, { color: string, class: string, priority: number }> = new Map([
    [HealthStatus.HEALTHY, {
        color: '#78BE20', // Where is this color used?
        class: 'slm-status-healthy',
        priority: 1
    }],
    [HealthStatus.WARNING, {
        color: '#FCAF17', // Where is this color used?
        class: 'slm-status-warning',
        priority: 2
    }],

    [HealthStatus.MAINTENANCE, {
        color: '#7faac8', // Where is this color used?
        class: 'slm-status-maintenance',
        priority: 3
    }],
    [HealthStatus.ERROR, {
        color: '#E20015', // Where is this color used?
        class: 'slm-status-unhealthy',
        priority: 4
    }],
    [HealthStatus.UNKNOWN, {
        color: '#BFC0C2', // Where is this color used?
        class: 'slm-status-unknown',
        priority: 0
    }]
]);

